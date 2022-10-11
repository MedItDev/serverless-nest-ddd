import { ValueObject } from '../../../core/domain/ValueObject';

export type TCourtesyProps = Readonly<{
  title: 'Mr' | 'Mrs' | 'Mx';
}>;

export class Courtesy extends ValueObject<TCourtesyProps> {
  private constructor(props: TCourtesyProps) {
    super(props);
  }

  public static create(props: TCourtesyProps): Courtesy {
    return new Courtesy(props);
  }
}
