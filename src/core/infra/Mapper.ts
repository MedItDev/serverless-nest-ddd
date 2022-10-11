export abstract class Mapper<
  DomainModel,
  RawEntity,
  DTO = Record<string, unknown>,
> {
  abstract toDomain(raw: RawEntity): DomainModel;
  toPersistence?(t: DomainModel): RawEntity;
  toDTO?(t: DomainModel): DTO;
}
