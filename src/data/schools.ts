export type SchoolMilestone = {
  year: number
  label: string
  students: number
  copy: string
}

export const schoolMilestones: SchoolMilestone[] = [
  {
    year: 2005,
    label: '6 students',
    students: 6,
    copy: 'The first cohort enters directly from rural high schools.',
  },
  {
    year: 2010,
    label: 'The experiment survives',
    students: 18,
    copy: 'Training moves from exception to repeatable pathway.',
  },
  {
    year: 2015,
    label: 'Graduates become engineers',
    students: 34,
    copy: 'Former apprentices are building and maintaining production software.',
  },
  {
    year: 2020,
    label: 'The model becomes proof',
    students: 52,
    copy: 'Credentialism looks less inevitable when the work keeps shipping.',
  },
  {
    year: 2025,
    label: '15-20% of engineers',
    students: 72,
    copy: 'A serious share of Zoho engineering talent comes through non-college pathways.',
  },
]
