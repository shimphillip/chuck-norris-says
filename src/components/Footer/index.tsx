import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <p className="footer">
      &copy; {new Date().getFullYear()} Phillip Shim
      <a
        href="https://github.com/shimphillip/chuck-norris-says"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'</>'}
      </a>
    </p>
  )
}

export default Footer
