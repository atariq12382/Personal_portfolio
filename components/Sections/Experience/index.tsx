import { memo } from 'react'
import { Heading, Text, Stack } from '@chakra-ui/react'
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
      Experience
    </Heading>
    <Text variant="description">
      Since 2022, I've had the opportunity to work with companies like{' '}
      <Text as="span" variant="emphasis">
        QBatch
      </Text>
      ,{' '}
      <Text as="span" variant="emphasis">
        Cogent Labs
      </Text>
      , and now{' '}
      <Text as="span" variant="emphasis">
        Dubizzle Labs
      </Text>
      , each shaping a different part of my growth as a developer. From building
      scalable frontends to contributing to high-impact product features, every
      role has pushed me to level up.
    </Text>
    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
