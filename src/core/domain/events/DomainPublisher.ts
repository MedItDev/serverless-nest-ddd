import {IDomainEvent} from "./IDomainEvent";
import {IDomainPublisher} from "./IDomainPublisher";

export abstract class DomainPublisher implements IDomainPublisher{
    abstract publish(event: IDomainEvent): Promise<void>;

    async publishEvents(events: Array<IDomainEvent>): Promise<void> {
        try {
            for (const event of events) {
                await this.publish(event);
            }
        } catch (err: unknown) {
            throw err;
        }
    }
}
