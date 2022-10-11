import { Test, TestingModule } from '@nestjs/testing';
import { ExampleHandlerService } from './example-handler.service';

describe('ExampleHandlerService', () => {
  let service: ExampleHandlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleHandlerService],
    }).compile();

    service = module.get<ExampleHandlerService>(ExampleHandlerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
