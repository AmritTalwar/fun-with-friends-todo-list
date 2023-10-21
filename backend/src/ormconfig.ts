import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  username: process.env.POSTGRES_USER || 'user',
  password: process.env.POSTGRES_PASSWORD || 'shayda123',
  database: process.env.POSTGRES_DB || 'todo',
  migrations: [`${__dirname}/__migrations__/*{.ts,.js}`],
  entities: [`${__dirname}/**/entities/*.entity{.ts,.js}`],
  migrationsTableName: 'migration_history',
  cache: true,
  migrationsRun: process.env.MIGRATIONS_RUN === 'true',
};

export const typeormConfig = {
  ...dataSourceConfig,
  autoLoadEntities: true,
};

export const AppDataSource = new DataSource(dataSourceConfig);
