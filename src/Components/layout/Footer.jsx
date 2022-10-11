import React from 'react'

function Footer({size}) {
    const allClasses = `${size} footer p-10 bg-gray-700 text-primary-content footer-center`
    const currentYear = new Date().getFullYear()
  return (
    <footer className={allClasses}>
        <p>Copyright &copy; {currentYear} All rights Reserved</p>
    </footer>
  )
}

export default Footer