import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  public example() {
    return 'test';
  }
}
