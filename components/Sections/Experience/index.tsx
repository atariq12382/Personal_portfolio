import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places i’ve worked.
    </Heading>
    <Text variant="description">
      Since 2022, I've had the privilege of working with some incredible
      companies that helped me sharpen my skills and grow as a developer. Each
      one holds a special place in my journey. Currently, I'm excited to be part
      of the team at{' '}
      <Link href="https://www.cogentlabs.co/" target="_blank" rel="noreferrer">
        Cogent Labs
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
