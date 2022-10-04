import { DynamicModule, Global, Module } from '@nestjs/common';
import { KnexOptions } from './knex.options.interface';
import { connectionFactory } from './knex.connection.factory.provider';
import { KNEX_OPTIONS } from './knex.constants';
import { DatabaseService } from './database.service';

@Global()
@Module({
  providers: [DatabaseService, connectionFactory],
  exports: [DatabaseService, connectionFactory, KNEX_OPTIONS],
})
export class DatabaseModule {
  public static forRoot(options: KnexOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: KNEX_OPTIONS,
          useValue: options,
        },
      ],
      exports: [KNEX_OPTIONS],
    };
  }
}
