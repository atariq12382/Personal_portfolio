import {
  Box,
  Image as ChkImage,
  SkeletonCircle,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { avatarAnimation } from 'config/animations'

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)

  const borderColor = useColorModeValue('teal.500', 'cyan.200')

  useEffect(() => {
    const img = new Image()
    img.src = './profile_image.png'

    window.preloadedPictures = [img]
  }, [])

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate={'animate'}
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src="./profile_image.png"
          alt="KL Lawingco Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          fallback={<SkeletonCircle height="100%" width="100%" />}
          border="1px solid"
          borderRadius="100%"
          borderColor={borderColor}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
