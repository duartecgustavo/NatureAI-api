import "reflect-metadata";
import { DataSource } from "typeorm";
import { Dicas } from "./entity/Dicas";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "suleiman.db.elephantsql.com",
  port: 5432,
  username: "zhceuntd",
  password: "ZtI-rCANtVU74JxaUd5xLfroCmQRBqoZ",
  database: "zhceuntd",
  synchronize: true,
  logging: false,
  entities: [Dicas],
  migrations: [],
  subscribers: [],
});
