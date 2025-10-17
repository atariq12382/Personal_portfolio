import { IconType } from 'react-icons'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareUpwork } from "react-icons/fa6";

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
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~016271ccaf40bdb63b?mp_source=share',
    icon: FaSquareUpwork,
  },
  {
    label: 'Github',
    href: 'mailto:mat57557@gmail.com',
    icon: IoMdMail,
  },
]
