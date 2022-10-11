import { CompositeSpecification } from '../../../core/domain/specification/CompositeSpecification';
import { Example } from '../domain/Example';

export class ExampleIsFemaleSpecification extends CompositeSpecification<Example> {
  public isSatisfiedBy(_t: Example): boolean {
    return _t.props.customer.value.sex === 'F';
  }
}
