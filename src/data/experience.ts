export type Job = {
  role: string
  employer: string
  link?: string
  date: string
  logo: string
  description: string
  technologies: string[]
}

export const jobs: Job[] = [
  {
    role: 'Full Stack Web Developer',
    employer: 'Self-employed',
    date: 'Mar 2026 - Present',
    logo: '/projects/shipbling.png',
    description:
      'Developing core backend integrations for Shipbling, a Singapore-based e-commerce platform in the gold and jewelry space. Engineering a multi-store sync system connecting Shopify and Shopee, covering product publishing, order ingestion, and real-time inventory updates. Working across the full stack: React dashboard, Node.js/Express API, PostgreSQL - with production deployments on DigitalOcean.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'DigitalOcean'],
  },
  {
    role: 'Consultant',
    employer: 'Kodland',
    link: 'https://www.kodland.org/',
    date: 'Dec 2025 - May 2026',
    logo: '/logos/kodland.png',
    description:
      'Providing guidance and support tutors at Kodland. Assisting with curriculum development and ensuring high-quality teaching standards are maintained. I have also led several workshops about the course updates and pedagogical techniques. Currently updating the course materials to match the new IDE features and UI.',
    technologies: ['Lua', 'Game Dev', 'Python'],
  },
  {
    role: 'Tutor',
    employer: 'Kodland',
    link: 'https://www.kodland.org/',
    date: 'Aug 2025 - Present',
    logo: '/logos/kodland.png',
    description:
      'Teaching programming to kids aged 8-14. Focus on game development using Lua in Roblox Studio. Helping students understand programming concepts through interactive projects and games.',
    technologies: ['Lua', 'Game Dev', 'Python'],
  },
  {
    role: 'Intern',
    employer: 'FooBar.rs',
    link: 'https://foobar.rs',
    date: 'Apr 2025 - July 2025',
    logo: '/desktop/experience.png',
    description:
      'Internship at FooBar where I learned Laravel and Vue.js. Very valuable experience at the start of my career where I learned how to write better, more sustainable code from a great mentor.',
    technologies: ['Laravel', 'Vue', 'PHP'],
  },
]
