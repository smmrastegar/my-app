'use client'

import { useEffect } from 'react'

export default function ClientScripts(): null {
  useEffect(() => {
    // Mobile menu toggle
    const header = document.querySelector('.site-header')
    const toggle = document.querySelector('.menu-toggle')
    
    const handleToggle = () => {
      header?.classList.toggle('open')
    }
    
    if (toggle) {
      toggle.addEventListener('click', handleToggle)
    }
    
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute('href')
      
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll)
    })
    
    // Cleanup
    return () => {
      if (toggle) {
        toggle.removeEventListener('click', handleToggle)
      }
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])
  
  return null
}

