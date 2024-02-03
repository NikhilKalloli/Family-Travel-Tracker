import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import pkg from 'pg';
const { Client } = pkg;

dotenv.config();

const app = express();
const port = 3000;

const connectionString = process.env.DATABASE_URL;
const db = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false, 
  },
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Nikhil", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisisted() {
  const result = await db.query(
    "SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1; ",
    [currentUserId]
  );
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getCurrentUser() {
  const result = await db.query("SELECT * FROM users");
  users = result.rows;
  return users.find((user) => user.id == currentUserId);
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const currentUser = await getCurrentUser();
  let uniqueCountriesSet = new Set(countries);
  res.render("index.ejs", {
    countries: countries,
    total: uniqueCountriesSet.size, 
    users: users,
    color: currentUser.color,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  // console.log(input);
  const currentUser = await getCurrentUser();

  if (input !== "") {
    try {
      const result = await db.query(
        "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
        [input.toLowerCase()]
      );

      const data = result.rows[0];
      const countryCode = data.country_code;

      const existingResult = await db.query(
        "SELECT * FROM visited_countries WHERE country_code = $1 AND user_id = $2",
        [countryCode, currentUserId]
      );

      if (existingResult.rows.length > 0) {
        throw new Error("Country has already been added, try again!");
      }

      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisisted();
      let uniqueCountriesSet = new Set(countries);
      res.render("index.ejs", {
        countries: countries,
        total: uniqueCountriesSet.size,
        users: users,
        color: currentUser.color,
        error: err.message,
      });
    }
  } else {
    const countries = await checkVisisted();
    let uniqueCountriesSet = new Set(countries);
    res.render("index.ejs", {
      countries: countries,
      total: uniqueCountriesSet.size,
      users: users,
      color: currentUser.color,
      error: "Please enter a country name!",
    });
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  const name = req.body.name;
  const color = req.body.color;
  // console.log(color);
  const result = await db.query(
    "INSERT INTO users (name, color) VALUES($1, $2) RETURNING *;",
    [name, color]
  );

  const id = result.rows[0].id;
  currentUserId = id;

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
