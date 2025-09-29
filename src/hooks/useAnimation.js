import { useState, useEffect } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleAnimation = () => {
    if (reducedMotion) {
      setIsAnimating(prev => !prev)
    } else {
      setIsAnimating(prev => !prev)
    }
  }

  return {
    isAnimating,
    reducedMotion,
    toggleAnimation,
    setIsAnimating
  }
}

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop')

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setDeviceType('mobile')
      } else if (width <= 768) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }

    updateDeviceType()
    window.addEventListener('resize', updateDeviceType)

    return () => window.removeEventListener('resize', updateDeviceType)
  }, [])

  return deviceType
}