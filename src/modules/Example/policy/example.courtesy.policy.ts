import { Policy } from '../../../core/domain/policy/Policy';
import { ExampleIsFemaleSpecification } from '../specification/example.is.female.specification';
import { Example } from '../domain/Example';
import { Courtesy } from '../domain/Courtesy';

export class ExampleCourtesyPolicy extends Policy<Example> {
  private constructor(specification: ExampleIsFemaleSpecification) {
    super(specification);
  }

  public override apply(_t: Example): Example {
    if (this.specification.isSatisfiedBy(_t)) {
      _t.courtesy = Courtesy.create({ title: 'Mrs' });
    }

    return _t;
  }

  public static create(
    specification: ExampleIsFemaleSpecification,
  ): ExampleCourtesyPolicy {
    return new ExampleCourtesyPolicy(specification);
  }
}
