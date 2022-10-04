import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { KNEX_OPTIONS } from './database/knex.constants';

const DatabaseConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'admin',
    password: 'admin',
    database: 'local',
  },
};

@Global()
@Module({
  providers: [{ provide: KNEX_OPTIONS, useValue: DatabaseConfig }],
  exports: [KNEX_OPTIONS],
})
export class ConnectionConfigFactory {}

@Module({
  imports: [
    ConnectionConfigFactory,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule.forRoot(DatabaseConfig),
  ],
})
export class AppModule {}
