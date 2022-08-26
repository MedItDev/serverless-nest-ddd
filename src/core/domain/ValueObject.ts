const clone = (obj: Record<string, unknown>) => Object.assign({}, obj);

export abstract class ValueObject<T extends Record<string, unknown>> {
  private readonly props: T;

  public get value() {
    return this.props;
  }

  protected constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }
    return clone(this.props) === vo.props;
  }
}
