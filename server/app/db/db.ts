import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "TCOS",
    port: 5432,
    database: "perntodo"
});

export default pool;