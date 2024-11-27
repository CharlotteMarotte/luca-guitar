import { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'

const AnimateOnScroll = ({ children, className = '', threshold = 0.3 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div
      ref={elementRef}
      className={clsx(
        'transition-opacity duration-1000 ease-in-out',
        prefersReducedMotion ? 'transition-none' : '',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      aria-hidden={!isVisible}
      aria-live={isVisible ? 'polite' : undefined}
    >
      {children}
    </div>
  )
}

export default AnimateOnScroll
