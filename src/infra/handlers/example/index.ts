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
  const { ExampleService } = await import('./example.service');
  const { ExampleModule } = await import('./example.module');

  const appContext: INestApplicationContext = await bootstrap();
  const lazyModuleLoader = appContext.get(LazyModuleLoader);
  const moduleRef = await lazyModuleLoader.load(() => ExampleModule);
  const lazyService = moduleRef.get(ExampleService);

  return new Response(lazyService.example()).response;
};

export const exampleHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  return LambdaToWarm(event, context, ExampleHandler);
};
