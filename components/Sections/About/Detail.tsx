import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { IoMdOpen } from 'react-icons/io'
import { TbBrandCSharp } from 'react-icons/tb'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2022

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i Do
      </Heading>
      <Text variant="description" align="justify">
        With over{' '}
        <Text as="span" variant="emphasis">
          {professionalYears} years of hands-on experience
        </Text>
        , I work as a{' '}
        <Text as="span" variant="emphasis">
          Software Engineer
        </Text>{' '}
        specializing in{' '}
        <Text as="span" variant="emphasis">
          JavaScript
        </Text>{' '}
        and{' '}
        <Text as="span" variant="emphasis">
          modern web development
        </Text>
        . I focus on building{' '}
        <Text as="span" variant="emphasis">
          scalable
        </Text>
        ,{' '}
        <Text as="span" variant="emphasis">
          high-performance applications
        </Text>{' '}
        using technologies like{' '}
        <Text as="span" variant="emphasis">
          React
        </Text>
        ,{' '}
        <Text as="span" variant="emphasis">
          Next.js
        </Text>
        , and{' '}
        <Text as="span" variant="emphasis">
          Node.js
        </Text>{' '}
        — from intuitive frontends to robust backend systems.
        <br />
        <br />
        Over the years, I've explored everything from{' '}
        <Text as="span" variant="emphasis">
          dynamic web apps
        </Text>{' '}
        to{' '}
        <Text as="span" variant="emphasis">
          Electron.js
        </Text>{' '}
        and{' '}
        <Text as="span" variant="emphasis">
          Vue.js
        </Text>
        , learning how to craft smooth, reliable digital experiences that users
        love. I enjoy solving complex problems, writing clean, maintainable
        code, and continuously refining my craft with every project I take on.
        <br />
        <br />
        Here are a few programming languages that are my cup of tea:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            JavaScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            TypeScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPython} color={emphasis} fontSize="2em" />
            Pyhton
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaJava} color={emphasis} fontSize="2em" />
            Java
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCplusplus} color={emphasis} fontSize="2em" />
            C++
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={TbBrandCSharp} color={emphasis} fontSize="2em" />
            C#
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my set of skills <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
