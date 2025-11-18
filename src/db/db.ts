import knex, { Knex } from "knex";
import 'dotenv/config'; 

const e = process.env;

const config: Knex.Config = {
  client: "mssql",
  connection: {
    server: e.SERVER,
    user: e.USER,            
    password: e.PASSWORD,  
    database: "PBI",
    options: {
      encrypt: false,           
      trustServerCertificate: true
    }
  }
};

// const config: Knex.Config  = {

//     client: "mssql",
//     connection: {
//       database: "PBI",
//       server: e.SERVER,
//       options: {
//         trustedConnection: true
//       }
    
//   }
// };

const db = knex(config);

export default db;