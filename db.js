require("dotenv").config();

const { Pool } = require("pg");

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
};

const pool = new Pool(config);

async function verificarConexion() {
  try {
    const client = await pool.connect();

    console.log("Conexión exitosa a la base de datos PostgreSQL");
    console.log("Base de datos:", config.database);
    console.log("Host:", config.host);
    console.log("Puerto:", config.port);

    client.release();
  } catch (err) {
    console.error("Error al conectar con la base de datos");
    console.error("Detalles del error:", err.message);
    console.error("Error completo:", err);
  }
}

verificarConexion();

module.exports = pool;
