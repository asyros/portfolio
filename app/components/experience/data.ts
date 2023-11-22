type experienceData = {
  heading: string
  sections: experience[]
}

type experience = {
  fromDate: Date
  toDate: Date
  currentlyWorking: Boolean
  description: string
  company: string
  key: string
}

let data: experienceData = {
  heading: 'EXPERIENCE',
  sections: [
    {
      fromDate: new Date(),
      toDate: new Date(),
      currentlyWorking: false,
      description: 'Projects',
      company: 'Sky',
      key: '1',
    },
    {
      fromDate: new Date('2017-01-05'),
      toDate: new Date('2018-02-06'),
      currentlyWorking: false,
      description: 'Doing stuff',
      company: 'Plusnet',
      key: '2',
    },
    {
      fromDate: new Date(),
      toDate: new Date(),
      currentlyWorking: false,
      description: '',
      company: '',
      key: '3',
    },
  ],
}

export { data }
