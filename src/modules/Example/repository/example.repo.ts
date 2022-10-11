export interface IRawExample {
  id: string;
  name: string;
  surname: string;
  sex: 'F' | 'M' | 'O';
  title: 'Mr' | 'Mrs' | 'Mx';
}

export interface IExampleRepo {
  getExampleById(id: number): Promise<IRawExample>;
  saveExample(example: IRawExample): Promise<void>;
}
