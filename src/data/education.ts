export type School = {
  id: 'university' | 'high-school'
  tab: string
  school: string
  degree: string
  date: string
  logo: string
  description: string
}

export const schools: School[] = [
  {
    id: 'high-school',
    tab: 'High School',
    school: "Electrotechnical School 'Mihajlo Pupin'",
    degree: 'Computer Technician',
    date: '2016 - 2020',
    logo: '/logos/mihajlo-pupin.png',
    description:
      'Graduated with honors in Computer Technician program. Gained foundational knowledge in hardware, software, and networking.',
  },
  {
    id: 'university',
    tab: 'University',
    school: 'Faculty of Technical Sciences',
    degree: 'Bachelor of Information Systems Engineering, University of Novi Sad',
    date: '2020 - Present',
    logo: '/logos/ftn.png',
    description:
      'Final-year student of Information Systems Engineering. At university I have learned a lot about databases, web development, software engineering principles and more. I am currently working on my final thesis.',
  },
]
