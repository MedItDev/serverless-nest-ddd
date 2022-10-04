import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { INestApplicationContext } from '@nestjs/common';
import { LambdaToWarm, THandlerFunc } from '../../utils/lambdaToWarm';
import { bootstrap } from '../../main';
import { LazyModuleLoader } from '@nestjs/core';
import { Response } from '../../utils/response';

const ExampleHandler: THandlerFunc = async (
  _event: APIGatewayProxyEvent,
  _context: Context,
): Promise<APIGatewayProxyResult> => {
  //Lazy Loading Modules
  const { TestDbService } = await import('./test-db.service');
  const { TestDbModule } = await import('./test-db.module');

  const appContext: INestApplicationContext = await bootstrap();
  const lazyModuleLoader = appContext.get(LazyModuleLoader);

  const moduleRef = await lazyModuleLoader.load(() => TestDbModule);
  const lazyService = moduleRef.get(TestDbService);

  return new Response(lazyService.getHello()).response;
};

export const exampleHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  return LambdaToWarm(event, context, ExampleHandler);
};
