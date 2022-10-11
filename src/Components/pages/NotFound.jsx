import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero hero-content flex-col'>
        <h1 className='text-6xl'>404!</h1>
        <p className='text-3xl'>Page not found</p>
        <Link to='/' className="btn btn-primary btn-lg"><FaHome className="inline pr-2"/> Back to Home</Link>
    </div>
  )
}

export default NotFound