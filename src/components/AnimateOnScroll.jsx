import { useEffect, useState } from 'react'

const AnimateOnScroll = ({ children, className = '', threshold = 0.3 }) => {
  const [isVisible, setIsVisible] = useState(false) // Track if the element is visible
  const [hasAnimated, setHasAnimated] = useState(false) // Track if the animation has already run
  const [scrollDirection, setScrollDirection] = useState(null) // Track the scroll direction
  const [lastScrollY, setLastScrollY] = useState(0) // Track the last scroll position

  // Track scroll direction (down or up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down') // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up') // Scrolling up
      }

      setLastScrollY(currentScrollY) // Update the last scroll position
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll) // Clean up the event listener
    }
  }, [lastScrollY])

  useEffect(() => {
    if (hasAnimated) return // If already animated, don't run the effect again

    // Create IntersectionObserver to detect when the element enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only if scrolling down and element is in view
        if (entry.isIntersecting && scrollDirection === 'down' && !hasAnimated) {
          setIsVisible(true) // Trigger the animation
          setHasAnimated(true) // Prevent the animation from triggering again
          observer.unobserve(entry.target) // Stop observing once animated
        }
      },
      { threshold }
    )

    const element = document.getElementById(className)
    if (element) {
      observer.observe(element) // Start observing the element
    }

    return () => {
      if (element) {
        observer.unobserve(element) // Clean up the observer when component unmounts or changes
      }
    }
  }, [className, threshold, hasAnimated, scrollDirection]) // Rerun effect when dependencies change

  return (
    <div id={className} className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  )
}

export default AnimateOnScroll
