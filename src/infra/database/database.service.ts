import {
  Inject,
  Injectable,
  Logger,
  OnApplicationShutdown,
} from '@nestjs/common';

import knex, { Knex } from 'knex';

import { CONFIG_OPTIONS } from './constants';
import { DatabaseConfigInterface } from './database.config.interface';

@Injectable()
export class DatabaseService implements OnApplicationShutdown {
  private readonly logger: Logger;
  private readonly knexClient: Knex<any, unknown[]>;

  constructor(@Inject(CONFIG_OPTIONS) options: DatabaseConfigInterface) {
    try {
      this.logger = new Logger('KnexModule');
      this.logger.log('Initializing database service...');
      this.knexClient = knex({ ...options, log: this.logger });
    } catch (err: unknown) {
      throw err;
    }
  }

  get client() {
    return this.knexClient;
  }

  onApplicationShutdown(): void {
    try {
      this.knexClient.destroy(() => {
        this.logger.debug('Knex client destroyed');
      });
    } catch (err: unknown) {
      this.logger.error(err);
    }
  }
}
