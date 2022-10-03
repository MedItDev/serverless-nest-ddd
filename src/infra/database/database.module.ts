import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './constants';
import { DatabaseService } from './database.service';
import { DatabaseConfigInterface } from './database.config.interface';

@Module({})
export class DatabaseModule {
  public static forRoot(options?: DatabaseConfigInterface): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        DatabaseService,
      ],
      exports: [DatabaseService],
    };
  }
}
