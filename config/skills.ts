import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithubactions,
  SiAmazonaws,
  SiDigitalocean,
  SiDocker,
  SiStyledcomponents,
  SiAntdesign,
  SiMaterialdesign,
  SiChakraui,
  SiVisualstudiocode,
  SiGit,
  SiGnubash,
  SiNotion,
  SiMicrosoft,
  SiElectron,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrandCSharp } from 'react-icons/tb'

export type Skill = {
  name: string
  icon: IconType
}

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'deployment'
  | 'ui'
  | 'productivity'
  | 'desktop'

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 2
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  languages: [
    {
      name: 'JavaScript',
      icon: SiJavascript,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'Python',
      icon: SiPython,
    },
    {
      name: 'Java',
      icon: FaJava,
    },
    {
      name: 'C++',
      icon: SiCplusplus,
    },
    {
      name: 'C#',
      icon: TbBrandCSharp,
    },
  ],
  frontend: [
    {
      name: 'React.js',
      icon: SiReact,
    },
    {
      name: 'Vue.js',
      icon: SiVuedotjs,
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
    },
  ],
  backend: [
    {
      name: 'Node.js',
      icon: SiNodedotjs,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
    },
    {
      name: 'Nest.js',
      icon: SiNestjs,
    },
  ],
  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
  ],
  deployment: [
    {
      name: 'Github Actions',
      icon: SiGithubactions,
    },
    {
      name: 'AWS',
      icon: SiAmazonaws,
    },
    {
      name: 'Digital Ocean',
      icon: SiDigitalocean,
    },
    {
      name: 'Docker',
      icon: SiDocker,
    },
  ],
  ui: [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'Ant Design',
      icon: SiAntdesign,
    },
    {
      name: 'Material UI',
      icon: SiMaterialdesign,
    },
    {
      name: 'Chakra UI',
      icon: SiChakraui,
    },
  ],
  productivity: [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'Notion',
      icon: SiNotion,
    },
  ],
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: SiMicrosoft,
    },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
}
