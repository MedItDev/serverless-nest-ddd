import { INestApplicationContext } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { bootstrap } from '../../main';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from 'aws-lambda';

export const exampleHandler: Handler = async (
  _event: APIGatewayProxyEvent,
  _context: Context,
): Promise<APIGatewayProxyResult> => {
  const { ExampleService } = await import('./example.service');
  const { ExampleModule } = await import('./example.module');

  const appContext: INestApplicationContext = await bootstrap();
  const lazyModuleLoader = appContext.get(LazyModuleLoader);
  const moduleRef = await lazyModuleLoader.load(() => ExampleModule);
  const lazyService = moduleRef.get(ExampleService);

  return { statusCode: 200, body: lazyService.example() };
};
