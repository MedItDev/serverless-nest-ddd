import { Injectable } from '@nestjs/common';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import {
  CreateExampleUseCase,
  CreatePosOrderHandler,
} from '../../../modules/Example/useCase';
import { Exception } from '../../utils/Exception';

@Injectable()
export class ExampleHandlerService {
  public async handleExample(
    event: APIGatewayProxyEvent,
    context: Context,
  ): Promise<APIGatewayProxyResult> {
    const createExampleUseCase = new CreateExampleUseCase();

    const createExampleHandler = new CreatePosOrderHandler(
      createExampleUseCase,
    );

    try {
      return (await createExampleHandler.execute(
        event,
        context,
      )) as APIGatewayProxyResult;
    } catch (err: unknown) {
      return new Exception(err);
    }
  }
}
