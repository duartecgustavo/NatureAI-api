import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "suleiman.db.elephantsql.com",
  port: 5432,
  username: "zhceuntd",
  password: "ZtI-rCANtVU74JxaUd5xLfroCmQRBqoZ",
  database: "zhceuntd",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
