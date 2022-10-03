import { ExampleService } from './example.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [ExampleService],
  exports: [ExampleService],
})
export class ExampleModule {}
