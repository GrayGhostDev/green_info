import { useEffect } from 'react'

interface UseIntersectionObserverProps {
  targetSelector: string
  onIntersect?: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({
  targetSelector,
  onIntersect = (entry, observer) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn')
      observer.unobserve(entry.target)
    }
  },
  threshold = 0.1,
  rootMargin = '0px'
}: UseIntersectionObserverProps) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => onIntersect(entry, observer))
    }, observerOptions)

    const elements = document.querySelectorAll(targetSelector)
    elements.forEach((el) => {
      el.classList.remove('animate-fadeIn')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [targetSelector, onIntersect, threshold, rootMargin])
} 