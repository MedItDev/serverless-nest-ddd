import { ValueObject } from '../../../core/domain/ValueObject';

export type TFullPersonProps = Readonly<{
  name: string;
  surname: string;
  title: 'Mr' | 'Mrs' | 'Mx';
  sex: 'F' | 'M' | 'O';
}>;

export class FullPerson extends ValueObject<TFullPersonProps> {
  private constructor(props: TFullPersonProps) {
    super(props);
  }

  public static create(props: TFullPersonProps): FullPerson {
    return new FullPerson(props);
  }
}
