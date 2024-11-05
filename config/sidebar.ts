import { IconType } from 'react-icons'
import {
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-abdullah-tariq-00790221a/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/atariq12382',
    icon: FaGithub,
  },
]
