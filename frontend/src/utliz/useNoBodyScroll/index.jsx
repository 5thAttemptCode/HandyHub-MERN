import { useLayoutEffect } from 'react'


export function useBodyScrollLock(active) {
  const originalStyle = window.getComputedStyle(document.body).overflow

  useLayoutEffect(
    () => {
      if (active) {
        document.body.style.overflow = 'hidden'
      }

      return () => {
        document.body.style.overflow = originalStyle
      }
    }, 
    [active] 
  )
}