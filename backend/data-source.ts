import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import "reflect-metadata";
import { DataSource } from "typeorm";

console.log(__dirname + "/migrations/*{.ts,.js}");
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: 5432,
  database: process.env.POSTGRES_DB || "tododb",
  username: process.env.POSTGRES_USER || "username",
  password: process.env.POSTGRES_PASSWORD || "shayda123",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations",
  subscribers: [],
  migrationsRun: true,
});
