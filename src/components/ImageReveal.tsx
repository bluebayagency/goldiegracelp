'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  sizes?: string
  priority?: boolean
  delay?: number
  direction?: 'left' | 'right' | 'up'
}

export function ImageReveal({
  src,
  alt,
  className = 'object-cover',
  wrapperClassName,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  delay = 0,
  direction = 'up',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const clipVariants = {
    hidden: {
      left:  { clipPath: 'inset(0 100% 0 0)' },
      right: { clipPath: 'inset(0 0 0 100%)' },
      up:    { clipPath: 'inset(100% 0 0 0)' },
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
    },
  }

  return (
    <motion.div
      ref={ref}
      className={wrapperClassName}
      initial={clipVariants.hidden[direction]}
      animate={isInView ? clipVariants.visible : clipVariants.hidden[direction]}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image src={src} alt={alt} fill className={className} sizes={sizes} priority={priority} />
    </motion.div>
  )
}
