import { DatabaseService } from '../database.service';
import { KNEX_CONNECTION } from './knex.constants';

export const connectionFactory = {
  provide: KNEX_CONNECTION,
  useFactory: async (knexService: DatabaseService) => {
    return knexService.client;
  },
  inject: [DatabaseService],
};
