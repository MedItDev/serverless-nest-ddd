import { Module } from '@nestjs/common';
import { ExampleHandlerService } from './example-handler.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [
    DatabaseModule.register({
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'toh',
        port: 5432,
      },
    }),
  ],
  providers: [ExampleHandlerService],
  exports: [ExampleHandlerService],
})
export class ExampleHandlerModule {}
