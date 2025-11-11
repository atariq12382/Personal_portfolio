import { Text } from '@chakra-ui/react'

export type Company = 'Dubizzle' | 'Cogent' | 'QBatch' | 'DevClub' | 'DevDen'

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
  Dubizzle: {
    name: 'Dubizzle Labs',
    longName: '',
    subDetail: 'Lahore, Punjab, Pakistan',
    url: 'https://www.dubizzlelabs.com/',
    position: 'Software Engineer',
    duration: 'April 2025 - September 2025',
    logo: {
      light: '/worked_at_logos/dubizzle/light.png',
      dark: '/worked_at_logos/dubizzle/dark.png',
    },
    roles: [
      <>
        Contributed to development and enhancement of{' '}
        <Text as="span" variant="emphasis">
          Bayut and Dubizzle's internal CRM system
        </Text>
      </>,
      <>
        <Text as="span" variant="emphasis">
          Designed and implemented multiple dashboards
        </Text>{' '}
        featuring interactive charts and hierarchical tables to improve data
        visualization for internal teams
      </>,
      <>
        <Text as="span" variant="emphasis">
          Built reusable generic components
        </Text>{' '}
        integrating third-party libraries (Drag-and-Drop, React Hook Form,
        Redux) to streamline development and reduce duplication
      </>,
      <>
        <Text as="span" variant="emphasis">
          Mentored and trained new associates
        </Text>
        , leading onboarding sessions and providing codebase guidance to
        accelerate their contributions
      </>,
    ],
  },
  Cogent: {
    name: 'Cogent Labs',
    longName: '',
    subDetail: 'Lahore, Punjab, Pakistan',
    url: 'https://www.cogentlabs.co/',
    position: 'Software Engineer',
    duration: 'October 2024 - Present',
    logo: {
      light: '/worked_at_logos/cogent/light.png',
      dark: '/worked_at_logos/cogent/dark.png',
    },
    roles: [
      <>
        <Text as="span" variant="emphasis">
          Boosted App Performance by 40%
        </Text>{' '}
        by restructuring legacy React components and optimizing WebSocket
        reconnection logic, reducing unnecessary API calls by 30% and cutting
        real-time data latency by 25%.
      </>,
      <>
        <Text as="span" variant="emphasis">
          Led a 3-member cross-functional team
        </Text>{' '}
        to deliver a mission-critical feature 2 weeks ahead of schedule,
        improving user engagement metrics by 15% through iterative feedback
        loops and Agile task prioritization.
      </>,
      <>
        <Text as="span" variant="emphasis">
          Accelerated onboarding efficiency
        </Text>{' '}
        by mastering 2 ongoing projects and team workflows, contributing to key
        feature deployments within the probation period while adhering to 100%
        of code quality standards.
      </>,
      <>
        <Text as="span" variant="emphasis">
          Reduced production bugs by 25%
        </Text>{' '}
        in Q3 by collaborating with senior developers to implement testing
        frameworks and code review best practices, conducting 20+ reviews to
        enforce project-specific standard
      </>,
    ],
  },
  QBatch: {
    name: 'QBatch',
    longName: '',
    subDetail: 'Faisalabad, Punjab, Pakistan',
    url: 'https://qbatch.com/',
    position: 'Associate Software Engineer',
    duration: 'July 2023 - September 2024',
    logo: {
      light: '/worked_at_logos/qbatch/light.png',
      dark: '/worked_at_logos/qbatch/dark.png',
    },
    roles: [
      <>
        <Text as="span" variant="emphasis">
          Spearheaded development of 3+ scalable MERN stack web apps
        </Text>
        , improving user experience by reducing page load time by{' '}
        <Text as="span" variant="emphasis">
          40%
        </Text>{' '}
        and increasing app responsiveness by{' '}
        <Text as="span" variant="emphasis">
          25%
        </Text>{' '}
        through optimized state management and server-side rendering.
      </>,
      <>
        <Text as="span" variant="emphasis">
          Pioneered the Proxy Browser project
        </Text>
        , achieving{' '}
        <Text as="span" variant="emphasis">
          100% user privacy compliance
        </Text>{' '}
        and integrating{' '}
        <Text as="span" variant="emphasis">
          custom extensions/themes
        </Text>
        , which boosted user satisfaction by{' '}
        <Text as="span" variant="emphasis">
          30%
        </Text>{' '}
        and drove a{' '}
        <Text as="span" variant="emphasis">
          25% increase in monthly active users
        </Text>
        within 6 months.
      </>,
      <>
        <Text as="span" variant="emphasis">
          Developed a Node.js/Express backend boilerplate
        </Text>{' '}
        adopted by{' '}
        <Text as="span" variant="emphasis">
          8+ projects
        </Text>
        , reducing initial setup time by{' '}
        <Text as="span" variant="emphasis">
          50%
        </Text>{' '}
        (from 40 to 20 hours per project) and standardizing practices for{' '}
        <Text as="span" variant="emphasis">
          90% of engineering teams
        </Text>
        .
      </>,
      <>
        <Text as="span" variant="emphasis">
          Streamlined deployment processes
        </Text>{' '}
        by configuring{' '}
        <Text as="span" variant="emphasis">
          20+ AWS EC2 instances
        </Text>
        , cutting deployment time by{' '}
        <Text as="span" variant="emphasis">
          20%
        </Text>{' '}
        (from 2 hours to 1.6 hours) and enabling{' '}
        <Text as="span" variant="emphasis">
          50+ automated deployments/month
        </Text>{' '}
        with zero downtime.
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
      light: '/worked_at_logos/devclub/light.png',
      dark: '/worked_at_logos/devclub/dark.png',
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
      light: '/worked_at_logos/devden/light.png',
      dark: '/worked_at_logos/devden/dark.png',
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
  Experiences.Dubizzle,
  Experiences.Cogent,
  Experiences.QBatch,
  Experiences.DevClub,
  Experiences.DevDen,
]
