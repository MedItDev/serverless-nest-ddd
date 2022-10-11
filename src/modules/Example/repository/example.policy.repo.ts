import { Example } from '../domain/Example';
import { IPolicy } from '../../../core/domain/policy/IPolicy';
import { PolicyRepo } from '../../../core/domain/policy/PolicyRepo';

export class ExamplePolicyRepo extends PolicyRepo<Example> {
  private constructor(policies: Array<IPolicy<Example>>) {
    super(policies);
  }

  public static create(policies: Array<IPolicy<Example>>): ExamplePolicyRepo {
    return new ExamplePolicyRepo(policies);
  }
}
