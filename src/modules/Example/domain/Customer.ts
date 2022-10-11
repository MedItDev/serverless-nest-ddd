import { ValueObject } from '../../../core/domain/ValueObject';

export type TCustomerProps = Readonly<{
  name: string;
  surname: string;
  sex: 'F' | 'M' | 'O';
}>;

export class Customer extends ValueObject<TCustomerProps> {
  private constructor(props: TCustomerProps) {
    super(props);
  }

  public static create(props: TCustomerProps): Customer {
    return new Customer(props);
  }
}
