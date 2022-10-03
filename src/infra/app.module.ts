import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule.forRoot({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'admin',
        password: 'admin',
        database: 'local',
      },
    }),
  ],
})
export class AppModule {}
