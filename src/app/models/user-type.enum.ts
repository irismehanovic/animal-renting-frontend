export enum UsersTypeEnum {
  renter = 'renter',
  rentee = 'rentee',
}

export const UsersTypeMapping = {
  [UsersTypeEnum.renter]: {
    label: 'Renter',
    color: '#ff8000',
    value: UsersTypeEnum.renter,
  },
  [UsersTypeEnum.rentee]: {
    label: 'Rentee',
    color: '#64129a',
    value: UsersTypeEnum.rentee,
  },
}
