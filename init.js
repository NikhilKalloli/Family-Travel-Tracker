import dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;

dotenv.config();


const connectionString = process.env.DATABASE_URL;
const db = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false, 
  },
});

const csvData = [
    [1, 'AF', 'Afghanistan'],
    [2, 'AX', 'Aland Islands'],
    [3, 'AL', 'Albania'],
    [4, 'DZ', 'Algeria'],
    [5, 'AS', 'American Samoa'],
    [6, 'AD', 'Andorra'],
    [7, 'AO', 'Angola'],
    [8, 'AI', 'Anguilla'],
    [9, 'AQ', 'Antarctica'],
    [10, 'AG', 'Antigua and Barbuda'],
    [11, 'AR', 'Argentina'],
    [12, 'AM', 'Armenia'],
    [13, 'AW', 'Aruba'],
    [14, 'AU', 'Australia'],
    [15, 'AT', 'Austria'],
    [16, 'AZ', 'Azerbaijan'],
    [17, 'ST', 'Sao Tome and Principe'],
    [18, 'BS', 'Bahamas'],
    [19, 'BH', 'Bahrain'],
    [20, 'BD', 'Bangladesh'],
    [21, 'BB', 'Barbados'],
    [22, 'BY', 'Belarus'],
    [23, 'BE', 'Belgium'],
    [24, 'BZ', 'Belize'],
    [25, 'BJ', 'Benin'],
    [26, 'BT', 'Bhutan'],
    [27, 'BO', 'Bolivia'],
    [28, 'BA', 'Bosnia and Herzegovina'],
    [29, 'BW', 'Botswana'],
    [30, 'BV', 'Bouvet Island'],
    [31, 'BR', 'Brazil'],
    [32, 'VG', 'British Virgin Islands'],
    [33, 'IO', 'British Indian Ocean Territory'],
    [34, 'BN', 'Brunei Darussalam'],
    [35, 'BG', 'Bulgaria'],
    [36, 'BF', 'Burkina Faso'],
    [37, 'BI', 'Burundi'],
    [38, 'KH', 'Cambodia'],
    [39, 'CM', 'Cameroon'],
    [40, 'CA', 'Canada'],
    [41, 'CV', 'Cape Verde'],
    [42, 'KY', 'Cayman Islands'],
    [43, 'CF', 'Central African Republic'],
    [44, 'TD', 'Chad'],
    [45, 'CL', 'Chile'],
    [46, 'CN', 'China'],
    [47, 'HK', 'Hong Kong, SAR China'],
    [48, 'CR', 'Costa Rica'],
    [49, 'MO', 'Macao, SAR China'],
    [50, 'CX', 'Christmas Island'],
    [51, 'CC', 'Cocos (Keeling) Islands'],
    [52, 'CO', 'Colombia'],
    [53, 'KM', 'Comoros'],
    [54, 'CD', 'Congo, (Kinshasa)'],
    [55, 'CK', 'Cook Islands'],
    [56, 'CI', "Côte d'Ivoire"],
    [57, 'HR', 'Croatia'],
    [58, 'CU', 'Cuba'],
    [59, 'CY', 'Cyprus'],
    [60, 'CZ', 'Czech Republic'],
    [61, 'DK', 'Denmark'],
    [62, 'DJ', 'Djibouti'],
    [63, 'DM', 'Dominica'],
    [64, 'DO', 'Dominican Republic'],
    [65, 'EC', 'Ecuador'],
    [66, 'EG', 'Egypt'],
    [67, 'SV', 'El Salvador'],
    [68, 'GQ', 'Equatorial Guinea'],
    [69, 'ER', 'Eritrea'],
    [70, 'EE', 'Estonia'],
    [71, 'ET', 'Ethiopia'],
    [72, 'FK', 'Falkland Islands (Malvinas)'],
    [73, 'FO', 'Faroe Islands'],
    [74, 'FJ', 'Fiji'],
    [75, 'FI', 'Finland'],
    [76, 'FR', 'France'],
    [77, 'GF', 'French Guiana'],
    [78, 'PF', 'French Polynesia'],
    [79, 'TF', 'French Southern Territories'],
    [80, 'GA', 'Gabon'],
    [81, 'GM', 'Gambia'],
    [82, 'GE', 'Georgia'],
    [83, 'DE', 'Germany'],
    [84, 'GH', 'Ghana'],
    [85, 'GI', 'Gibraltar'],
    [86, 'GR', 'Greece'],
    [87, 'GL', 'Greenland'],
    [88, 'GD', 'Grenada'],
    [89, 'GP', 'Guadeloupe'],
    [90, 'GU', 'Guam'],
    [91, 'GT', 'Guatemala'],
    [92, 'GG', 'Guernsey'],
    [93, 'GN', 'Guinea'],
    [94, 'GW', 'Guinea-Bissau'],
    [95, 'GY', 'Guyana'],
    [96, 'HT', 'Haiti'],
    [97, 'HM', 'Heard and Mcdonald Islands'],
    [98, 'VA', 'Holy See (Vatican City State)'],
    [99, 'HN', 'Honduras'],
    [100, 'HU', 'Hungary'],
    [101, 'IS', 'Iceland'],
    [102, 'FM', 'Micronesia, Federated States of'],
    [103, 'RE', 'Réunion'],
    [104, 'ID', 'Indonesia'],
    [105, 'IR', 'Iran, Islamic Republic of'],
    [106, 'IQ', 'Iraq'],
    [107, 'IE', 'Ireland'],
    [108, 'IM', 'Isle of Man'],
    [109, 'IL', 'Israel'],
    [110, 'IT', 'Italy'],
    [111, 'JM', 'Jamaica'],
    [112, 'JP', 'Japan'],
    [113, 'JE', 'Jersey'],
    [114, 'JO', 'Jordan'],
    [115, 'MD', 'Moldova'],
    [116, 'KZ', 'Kazakhstan'],
    [117, 'KE', 'Kenya'],
    [118, 'KI', 'Kiribati'],
    [119, 'KP', 'Korea (North)'],
    [120, 'KR', 'Korea (South)'],
    [121, 'KW', 'Kuwait'],
    [122, 'KG', 'Kyrgyzstan'],
    [123, 'LA', 'Lao PDR'],
    [124, 'LV', 'Latvia'],
    [125, 'LB', 'Lebanon'],
    [126, 'LS', 'Lesotho'],
    [127, 'LR', 'Liberia'],
    [128, 'LY', 'Libya'],
    [129, 'LI', 'Liechtenstein'],
    [130, 'LT', 'Lithuania'],
    [131, 'LU', 'Luxembourg'],
    [132, 'MK', 'Macedonia, Republic of'],
    [133, 'MG', 'Madagascar'],
    [134, 'MW', 'Malawi'],
    [135, 'MY', 'Malaysia'],
    [136, 'MV', 'Maldives'],
    [137, 'BM', 'Bermuda'],
    [138, 'ML', 'Mali'],
    [139, 'MT', 'Malta'],
    [140, 'MH', 'Marshall Islands'],
    [141, 'MQ', 'Martinique'],
    [142, 'MR', 'Mauritania'],
    [143, 'MU', 'Mauritius'],
    [144, 'YT', 'Mayotte'],
    [145, 'MX', 'Mexico'],
    [146, 'MC', 'Monaco'],
    [147, 'MN', 'Mongolia'],
    [148, 'ME', 'Montenegro'],
    [149, 'MS', 'Montserrat'],
    [150, 'MA', 'Morocco'],
    [151, 'MZ', 'Mozambique'],
    [152, 'MM', 'Myanmar'],
    [153, 'NA', 'Namibia'],
    [154, 'NR', 'Nauru'],
    [155, 'NP', 'Nepal'],
    [156, 'NL', 'Netherlands'],
    [157, 'AN', 'Netherlands Antilles'],
    [158, 'NC', 'New Caledonia'],
    [159, 'NZ', 'New Zealand'],
    [160, 'NI', 'Nicaragua'],
    [161, 'NE', 'Niger'],
    [162, 'NG', 'Nigeria'],
    [163, 'NU', 'Niue'],
    [164, 'NF', 'Norfolk Island'],
    [165, 'MP', 'Northern Mariana Islands'],
    [166, 'NO', 'Norway'],
    [167, 'OM', 'Oman'],
    [168, 'PK', 'Pakistan'],
    [169, 'PW', 'Palau'],
    [170, 'PS', 'Palestinian Territory'],
    [171, 'PA', 'Panama'],
    [172, 'PG', 'Papua New Guinea'],
    [173, 'PY', 'Paraguay'],
    [174, 'PE', 'Peru'],
    [175, 'PH', 'Philippines'],
    [176, 'PN', 'Pitcairn'],
    [177, 'PT', 'Portugal'],
    [178, 'PR', 'Puerto Rico'],
    [179, 'QA', 'Qatar'],
    [180, 'RO', 'Romania'],
    [181, 'RU', 'Russian Federation'],
    [182, 'RW', 'Rwanda'],
    [183, 'BL', 'Saint-Barthélemy'],
    [184, 'SH', 'Saint Helena'],
    [185, 'KN', 'Saint Kitts and Nevis'],
    [186, 'LC', 'Saint Lucia'],
    [187, 'MF', 'Saint-Martin (French part)'],
    [188, 'PM', 'Saint Pierre and Miquelon'],
    [189, 'VC', 'Saint Vincent and Grenadines'],
    [190, 'WS', 'Samoa'],
    [191, 'SM', 'San Marino'],
    [192, 'SA', 'Saudi Arabia'],
    [193, 'SN', 'Senegal'],
    [194, 'RS', 'Serbia'],
    [195, 'SC', 'Seychelles'],
    [196, 'SL', 'Sierra Leone'],
    [197, 'SG', 'Singapore'],
    [198, 'SK', 'Slovakia'],
    [199, 'SI', 'Slovenia'],
    [200, 'SB', 'Solomon Islands'],
    [201, 'SO', 'Somalia'],
    [202, 'ZA', 'South Africa'],
    [203, 'GS', 'South Georgia and the South Sandwich Islands'],
    [204, 'SS', 'South Sudan'],
    [205, 'ES', 'Spain'],
    [206, 'LK', 'Sri Lanka'],
    [207, 'SD', 'Sudan'],
    [208, 'SR', 'Suriname'],
    [209, 'SJ', 'Svalbard and Jan Mayen Islands'],
    [210, 'SZ', 'Swaziland'],
    [211, 'SE', 'Sweden'],
    [212, 'CH', 'Switzerland'],
    [213, 'SY', 'Syrian Arab Republic (Syria)'],
    [214, 'TW', 'Taiwan, Republic of China'],
    [215, 'TJ', 'Tajikistan'],
    [216, 'TZ', 'Tanzania, United Republic of'],
    [217, 'TH', 'Thailand'],
    [218, 'IN', 'India'],
    [219, 'CG', 'Congo (Brazzaville)'],
    [220, 'PL', 'Poland'],
    [221, 'TL', 'Timor-Leste'],
    [222, 'TG', 'Togo'],
    [223, 'TK', 'Tokelau'],
    [224, 'TO', 'Tonga'],
    [225, 'TT', 'Trinidad and Tobago'],
    [226, 'TN', 'Tunisia'],
    [227, 'TR', 'Turkey'],
    [228, 'TM', 'Turkmenistan'],
    [229, 'TC', 'Turks and Caicos Islands'],
    [230, 'TV', 'Tuvalu'],
    [231, 'UG', 'Uganda'],
    [232, 'UA', 'Ukraine'],
    [233, 'AE', 'United Arab Emirates'],
    [234, 'GB', 'United Kingdom'],
    [235, 'US', 'United States of America'],
    [236, 'UM', 'US Minor Outlying Islands'],
    [237, 'UY', 'Uruguay'],
    [238, 'UZ', 'Uzbekistan'],
    [239, 'VU', 'Vanuatu'],
    [240, 'VE', 'Venezuela (Bolivarian Republic)'],
    [241, 'VN', 'Viet Nam'],
    [242, 'VI', 'Virgin Islands, US'],
    [243, 'WF', 'Wallis and Futuna Islands'],
    [244, 'EH', 'Western Sahara'],
    [245, 'YE', 'Yemen'],
    [246, 'ZM', 'Zambia'],
    [247, 'ZW', 'Zimbabwe']
  ];
  
async function initializeDatabase() {
    try {
      await db.connect();

      await db.query('DROP TABLE IF EXISTS visited_countries, users');


      // Create the 'users' table
      await db.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(15) UNIQUE NOT NULL,
          color VARCHAR(15)
        )
      `);
  
      // Create the 'visited_countries' table
      await db.query(`
        CREATE TABLE visited_countries (
          id SERIAL PRIMARY KEY,
          country_code CHAR(2) NOT NULL,
          user_id INTEGER REFERENCES users(id)
        )
      `);
    
    // Create the 'countries' table
      await db.query(`
      CREATE TABLE countries (
        id SERIAL PRIMARY KEY,
        country_name VARCHAR(100) NOT NULL,
        country_code CHAR(2) NOT NULL
      )
    `);
  
      // Insert data into the 'users' table
      await db.query(`
        INSERT INTO users (name, color)
        VALUES ('Nikhil', 'teal'), ('Harry', 'powderblue')
      `);
  
      // Insert data into the 'visited_countries' table
      await db.query(`
        INSERT INTO visited_countries (country_code, user_id)
        VALUES ('IO', 1), ('GB', 1), ('CA', 2), ('FR', 2)
      `);

    // Insert data into the 'countries' table
      for (const row of csvData) {
        await db.query(`
          INSERT INTO countries (country_name, country_code)
          VALUES ($1, $2)
        `, [row.country_name, row.country_code]);
      }
  
  
      console.log('Database initialized successfully!');
    } catch (error) {
      console.error('Error initializing database:', error.message);
    } finally {
      await db.end(); 
    }
  }
  
  initializeDatabase();