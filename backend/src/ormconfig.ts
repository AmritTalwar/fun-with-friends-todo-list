import { DataSource, DataSourceOptions } from 'typeorm';

console.log(__dirname + '/__migrations__/*{.ts,.js}');
const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  port: 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  username: process.env.POSTGRES_USER || 'user',
  password: process.env.POSTGRES_PASSWORD || 'shayda123',
  database: process.env.POSTGRES_DB || 'todo',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/__migrations__/*{.ts,.js}'],
  migrationsTableName: 'migration_history',
  cache: true,
  migrationsRun: process.env.MIGRATIONS_RUN === 'true',
};

export const typeormConfig = {
  ...dataSourceConfig,
  autoLoadEntities: true,
};

export const AppDataSource = new DataSource(dataSourceConfig);
