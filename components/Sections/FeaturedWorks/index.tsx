import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
  Container,
  Button,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import {
  fadeInUpSlower,
  galleryStagger,
  simpleOpacity,
} from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)
const MotionButton = motion(Button)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Some of my works.
      </Heading>
      <Text variant="description" align="justify">
        Here's a glimpse into the projects I've built across QBatch, Dubizzle
        Labs, Cogent Labs, and my freelance collaborations. From scalable
        front-end systems to full web experiences crafted with React, Next.js,
        and TypeScript, each project reflects my focus on clean architecture,
        performance, and creating products people actually enjoy using.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="AIG HR System"
            src="/works/hr_system.jpeg"
            description="AIG HR System is a comprehensive SaaS solution designed to streamline HR management. From employee records and payrolls to leave management, bonuses, attendance, and request handling, it simplifies all aspects of HR, making processes more efficient and organized."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Auction Platform"
            description="An innovative online marketplace that connects buyers and sellers for seamless vehicle auctions. With user-friendly features and real-time bidding, it simplifies the car auction process, making it easy to find, list, and bid on vehicles."
            src="/works/auction.jpeg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Proxy Browser"
            description="a secure and private browsing solution that prioritizes user anonymity and data protection. With advanced proxy features, it enables safe internet navigation, ensuring users can explore the web without compromising their privacy."
            src="/works/proxy.jpeg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Travelmania"
            description="A dynamic platform designed for tour guides to showcase their portfolios, experiences, and travel packages. It empowers guides to connect with potential clients, highlighting their unique offerings and expertise in the travel industry."
            src="/works/travelmania.jpeg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
      <Container
        maxWidth="100%"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <MotionButton
          size="lg"
          variant="outline"
          borderWidth="1px"
          borderRadius="0"
          fontWeight="bold"
          fontSize="sm"
          variants={simpleOpacity}
          as={'a'}
          href="https://github.com/atariq12382?tab=repositories"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Full Portfolio
        </MotionButton>
      </Container>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
