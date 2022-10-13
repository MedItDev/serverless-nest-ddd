import { Example } from '../domain/Example';

export interface IRawExample {
  id: string; //UUID
  name: string;
  surname: string;
  sex: 'F' | 'M' | 'O';
}

export interface IExampleRepo {
  getExampleById(id: string): Promise<IRawExample>;
  saveExample(example: Example): Promise<void>;
}
