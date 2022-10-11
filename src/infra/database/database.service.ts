import {
  Inject,
  Injectable,
  Logger,
  OnApplicationShutdown,
} from '@nestjs/common';
import { KnexOptions } from './knex/knex.options.interface';
import { KNEX_OPTIONS } from './knex/knex.constants';
import * as KnexClient from 'knex';

@Injectable()
export class DatabaseService implements OnApplicationShutdown {
  private readonly logger: Logger;
  private readonly knexClient: KnexClient.Knex | undefined;

  constructor(@Inject(KNEX_OPTIONS) private readonly options: KnexOptions) {
    try {
      this.logger = new Logger('KnexService');
      this.logger.log('Initializing database service...');

      if (!this.knexClient) {
        this.knexClient = KnexClient.knex(this.options);
      }
    } catch (err: unknown) {
      throw err;
    }
  }

  get client() {
    return this.knexClient;
  }

  onApplicationShutdown(): void {
    try {
      this.knexClient?.destroy(() => {
        this.logger.log('Knex client destroyed');
      });
    } catch (err: unknown) {
      this.logger.error(err);
    }
  }
}
