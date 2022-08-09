import {IDomainEvent} from "./IDomainEvent";

export interface IDomainPublisher {
    publish(event: IDomainEvent): Promise<void>;
}