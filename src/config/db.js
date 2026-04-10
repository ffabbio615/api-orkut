const {Pool} = require('pg');

// module.exports = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl:{
//         rejectUnauthorized: false,
//     }
// })


// module.exports = new Pool({
//     connectionString: process.env.DATABASE_URL
// });


const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === "production";

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});