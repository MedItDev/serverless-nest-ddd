import { Inject, Injectable } from '@nestjs/common';
import * as KnexClient from 'knex';
import { KNEX_CONNECTION } from '../../database/knex.constants';

@Injectable()
export class TestDbService {
  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex: KnexClient.Knex,
  ) {}
  getHello(): string {
    console.log(this.knex());

    return 'Hello World!';
  }
}
