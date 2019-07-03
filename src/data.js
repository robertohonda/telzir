export const callingRates = {
  '011': {
    '016': {
      cost: 1.9,
    },
    '017': {
      cost: 1.7,
    },
    '018': {
      cost: 0.9,
    },
  },
  '016': {
    '011': {
      cost: 2.9,
    },
  },
  '017': {
    '011': {
      cost: 2.7,
    },
  },
  '018': {
    '011': {
      cost: 1.9,
    },
  },
}

export const ratePlans = [
  {
    label: 'FaleMais 30',
    value: 'FALEMAIS30',
  },
  {
    label: 'FaleMais 60',
    value: 'FALEMAIS60',
  },
  {
    label: 'FaleMais 120',
    value: 'FALEMAIS120',
  },
]

export const ratePlansFreeMinutes = {
  FALEMAIS30: 30,
  FALEMAIS60: 60,
  FALEMAIS120: 120,
}
