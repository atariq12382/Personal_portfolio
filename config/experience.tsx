import { Link } from '@chakra-ui/react'

export type Company = 'QBatch' | 'DevClub' | 'DevDen'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  QBatch: {
    name: 'QBatch',
    longName: '',
    subDetail: 'Faisalabad, Punjab, Pakistan',
    url: 'QBatch',
    position: 'Associate Software Engineer',
    duration: 'July 2023 - Present',
    logo: {
      light: '/worked_at_logos/qbatch/qbatch_light_logo.svg',
      dark: '/worked_at_logos/qbatch/qbatch_light_logo.svg',
    },
    roles: [
      <>
        Spearheaded the development and deployment of 3+ scalable web
        applications using the MERN stack, significantly enhancing user
        experience and performance.
      </>,
      <>
        Pioneered the Proxy Browser project, achieving total user privacy and
        integrating unique features like extensions and theme settings,
        surpassing the capabilities of competitors, leading to a 30% increase in
        user satisfaction and experience.
      </>,
      <>
        Developed a comprehensive Node Express backend boilerplate, setting the
        foundation for future projects and standardizing development practices
        within the company, reducing initial project setup time by 50%.
      </>,
      <>
        Experienced in setting up EC2 servers and deploying applications,
        enhancing deployment efficiency by 20%.
      </>,
    ],
  },
  DevClub: {
    name: 'DevClub',
    longName: '',
    subDetail: 'Remote',
    url: 'https://www.devclubm.com/',
    position: 'Junior Software Engineer',
    duration: 'December 2022 - July 2023',
    logo: {
      light: '/worked_at_logos/devclub/devclub_light.png',
      dark: '/worked_at_logos/devclub/devclub_dark.png',
    },
    roles: [
      <>
        Innovatively designed and implemented 2 MERN stack SAAS applications
        with a strong emphasis on user-centric design and functionality.
      </>,
      <>
        Enhanced application performance by 25% by leveraging Next.js and Vue.js
        technologies.
      </>,
      <>
        Demonstrated exceptional virtual communication and project management
        skills while working within a remote team setup, leading to a 15%
        increase in project delivery speed.
      </>,
    ],
  },
  DevDen: {
    name: 'DevDen',
    longName: '',
    subDetail: 'Faisalabad, Punjab, Pakistan',
    url: 'https://devden.io/',
    position: 'Intern',
    duration: 'June 2022 - August 2022',
    logo: {
      light: '/worked_at_logos/devden/devden_light.png',
      dark: '/worked_at_logos/devden/devden_light.png',
    },
    roles: [
      <>
        Gained extensive hands-on experience with Ruby On Rails, showcasing
        adaptability and technical proficiency, resulting in a 20% reduction in
        development time for subsequent projects.
      </>,
      <>
        Fostered a collaborative and innovative work environment through active
        participation in team projects, improving team efficiency by 10%.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.QBatch,
  Experiences.DevClub,
  Experiences.DevDen,
]
