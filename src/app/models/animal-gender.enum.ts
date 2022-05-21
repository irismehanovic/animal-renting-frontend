export enum AnimalGenderEnum {
  male = 'male',
  female = 'female',
}

export const AnimalGenderMapping = {
  [AnimalGenderEnum.male]: {
    label: 'Male',
    color: '#0070dd',
    value: AnimalGenderEnum.male,
  },
  [AnimalGenderEnum.female]: {
    label: 'Female',
    color: '#ff8000',
    value: AnimalGenderEnum.female,
  },
}
