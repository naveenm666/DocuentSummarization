import { DataSource } from "typeorm";
import { Movie } from "./entities/Movie"; // Import the new entity
import { DocumentSummarization } from './entities/Summary';



export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'my-turbo-monorepo-db',
    synchronize: false, // Disable auto-synchronization to use migrations
    logging: ["error", "query"],
    entities: [ Movie, DocumentSummarization],
    migrations: ['src/migration/**/*.ts'], // Path to your migrations
    subscribers: [],
    migrationsTableName: 'migrations', // Optional: Custom name for the migrations table
  });