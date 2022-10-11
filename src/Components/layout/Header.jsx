import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import {FaGithub} from 'react-icons/fa'

function Header({size}) {
    const allClasses = `${size} navbar shadow-lg bg-neutral text-neutral-content flex flex-row items-center`
  return (
    <nav className={allClasses}>
        <div className="basis-1/12"></div>
        <Link to="/" className="basis-9/12 font-bold flex flex-row">
            <FaGithub className='inline pr-2 text-3xl'/>
            <div className='text-xl'>
                Github Finder
            </div>
        </Link>
        <NavBar />
    </nav>
  )
}

export default Header