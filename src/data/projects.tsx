import type { ReactNode } from 'react'

export type Project = {
  id: string
  /** Label under the icon in the Project Explorer. */
  name: string
  /** Heading inside the ProjectDetails window. */
  title: string
  description: ReactNode
  image: string
  /** Animated sprite sheet instead of a static image. */
  sprite?: boolean
  stack: string[]
  link?: string
  inDevelopment?: boolean
}

export const projects: Project[] = [
  {
    id: 'shipbling',
    name: 'Shipbling',
    title: 'Shipbling',
    description:
      'Shipbling is a Singapore-based e-commerce platform for jewelry manufacturers and resellers. It allows users to easily manage multiple online stores, providing them with a product catalog, order management, and inventory synchronization across different e-commerce platforms. I am currently working on engineering a multi-store sync system between Shopify and Shopee, covering product publishing, order ingestion, and real-time inventory updates.',
    image: '/projects/shipbling.png',
    stack: ['Node.js', 'React', 'MySQL'],
    link: 'https://shipbling.com',
  },
  {
    id: 'teeny',
    name: 'Teeny Studio',
    title: 'Teeny Studio',
    description:
      "Teeny Studio is a Belgrade-based design studio specializing in brand strategy, brand design, and product design. I worked closely with the studio's designer to bring their vision to life, translating the designs into a responsive, pixel-perfect website.",
    image: '/projects/teeny.png',
    stack: ['React'],
    link: 'https://teeny.studio',
  },
  {
    id: 'sunnie',
    name: 'Sunnie',
    title: 'Sunnie',
    description: 'Sunnie is an app for baristas and coffee lovers. Coming soon.',
    image: '/projects/sunnie.png',
    stack: ['Expo', 'React Native', 'Supabase'],
    inDevelopment: true,
  },
  {
    id: 'kosa-nostra',
    name: 'Kosa Nostra barbershop',
    title: 'Kosa Nostra Barbershop',
    description:
      'Website built for a local barbershop. Includes online scheduling, barber dashboard and integrated Google calendar. Supports multiple barbers with different working hours. Currently working on a Telegram bot for appointment notifications.',
    image: '/projects/kosa-nostra.png',
    stack: ['Node.js', 'React', 'MySQL', 'Tailwind'],
    link: 'https://kosa-nostra.com',
  },
  {
    id: 'mokra-gora',
    name: 'Mokra Gora Apartments',
    title: 'Mokra Gora Apartments',
    description: (
      <>
        Working on optimizing an already built website for apartments in Mokra Gora. The website
        contains 360° pictures and multiple videos. Originally built by{' '}
        <a href="https://www.linkedin.com/in/vuk-stojic/" target="_blank" rel="noopener noreferrer">
          Vuk Stojić
        </a>{' '}
        and{' '}
        <a
          href="https://www.linkedin.com/in/danilo-radivojevic-441351256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Danilo Radivojević
        </a>
        .
      </>
    ),
    image: '/projects/mokra-gora.png',
    stack: ['Next.js'],
    inDevelopment: true,
  },
  {
    id: 'refocus',
    name: 'ReFocus',
    title: 'ReFocus',
    description:
      'Website built for a group of young students to bring their business idea to life. They are making 3D printed keychains to help kids find their lost keys, all while using recycled plastic. The MVP is live.',
    image: '/projects/refocus.png',
    stack: ['React', 'Node.js', 'MySQL'],
    link: 'https://www.refocusco.rs/',
  },
  {
    id: 'cyrillic-cms',
    name: 'Cyrillic CMS (Hackathon)',
    title: 'Cyrillic CMS',
    description:
      'Cyrillic CMS Challenge, a hackathon dedicated to building innovative Content Management Services tailored specifically for Serbian Cyrillic alphabet content. Worked alongside 2 other developers with a 48 hour time limit.',
    image: '/projects/cyrillic-cms.png',
    stack: ['Node.js', 'React'],
    link: 'https://github.com/davidrosic/Cokolada',
  },
  {
    id: 'tax-calculator',
    name: 'Tax Calculator',
    title: 'Tax Calculator',
    description:
      'Website that is used to track payments and calculate tax for Serbian Freelancers.',
    image: '/projects/tax-calculator.png',
    stack: ['Laravel'],
    link: 'https://porez-kalkulator.rs/',
  },
  {
    id: 'mobile-game',
    name: 'Mobile Unity Game',
    title: 'Mobile Unity Game',
    description:
      'A mobile pixel-art endless runner made in Unity. With different types of enemy mobs, levels and bosses. Pre-Alpha is out.',
    image: '/projects/game-sprite.png',
    sprite: true,
    stack: ['Unity', 'C#', 'Mobile'],
    inDevelopment: true,
  },
  {
    id: 'portfolio',
    name: 'Portfolio website',
    title: 'Portfolio Website',
    description: 'My own portfolio website. The one you are currently looking at.',
    image: '/projects/portfolio.png',
    stack: ['React'],
    link: 'https://mihic.dev',
  },
  {
    id: 'design-patterns',
    name: 'University project',
    title: 'University Project',
    description:
      'Java Swing application for drawing 2D geometric shapes. Made for a university project. Project was used for the Design Patterns course.',
    image: '/projects/design-patterns.png',
    stack: ['Java'],
    link: 'https://github.com/darkomihic/designpatternsproject',
  },
]
