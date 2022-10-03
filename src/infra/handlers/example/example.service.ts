import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class ExampleService {
  constructor(private readonly dbService: DatabaseService) {}

  public example() {
    console.log(this.dbService.client);

    return 'test';
  }
}
