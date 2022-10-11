import { DynamicModule, Logger, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { KnexOptions } from './knex/knex.options.interface';
import { connectionFactory } from './knex/knex.connection.factory.provider';
import { KNEX_OPTIONS } from './knex/knex.constants';

@Module({
  providers: [DatabaseService],
})
export class DatabaseModule {
  static register(options: KnexOptions): DynamicModule {
    new Logger('KnexCoreModule');

    const optionsProvider = {
      provide: KNEX_OPTIONS,
      useValue: options,
    };

    return {
      module: DatabaseModule,
      providers: [connectionFactory, optionsProvider],
      exports: [connectionFactory, optionsProvider],
    };
  }
}
