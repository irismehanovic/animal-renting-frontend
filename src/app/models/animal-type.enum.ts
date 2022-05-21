export enum AnimalTypeEnum {
  dog = 'dog',
  cat = 'cat',
  rabbit = 'rabbit',
  hamster = 'hamster',
  bird = 'bird',
}

export const AnimalTypeMapping = {
  [AnimalTypeEnum.dog]: {
    label: 'Dog',
    color: '#ff8000',
    value: AnimalTypeEnum.dog,
  },
  [AnimalTypeEnum.cat]: {
    label: 'Cat',
    color: '#0070dd',
    value: AnimalTypeEnum.cat,
  },
  [AnimalTypeEnum.rabbit]: {
    label: 'Rabbit',
    color: '#1eff00',
    value: AnimalTypeEnum.rabbit,
  },
  [AnimalTypeEnum.hamster]: {
    label: 'Hamster',
    color: '#c0c51f',
    value: AnimalTypeEnum.hamster,
  },
  [AnimalTypeEnum.bird]: {
    label: 'Bird',
    color: '#64129a',
    value: AnimalTypeEnum.bird,
  },
}
