export abstract class BaseHandler<Event, Context, Response> {
  // or even private
  protected event: Event | undefined;
  protected context: Context | undefined;

  protected abstract executeImpl(): Promise<void | Response>;

  public async execute(
    event: Event,
    context: Context,
  ): Promise<void | Response> {
    this.event = event;
    this.context = context;

    return await this.executeImpl();
  }
}
