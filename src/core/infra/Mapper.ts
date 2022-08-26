export abstract class Mapper<DomainModel, RawEntity, DTO> {
  abstract toDomain(raw: RawEntity): DomainModel;
  abstract toPersistence(t: DomainModel): RawEntity;
  abstract toDTO(t: DomainModel): DTO;
}
