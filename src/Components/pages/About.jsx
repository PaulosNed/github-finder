import { Link } from "react-router-dom"

function About() {
  return (
    <div className="flex justify-start items-center">
      <div>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-xl font-light'>
          A React app to search GitHub profiles and see profile details. This
          project is part of the
          <Link to='https://www.udemy.com/course/modern-react-front-to-back/'>
            {' '}
            React Front To Back
          </Link>{' '}
          Udemy course by
          <strong>
            <Link to='https://traversymedia.com'> Brad Traversy</Link>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By:
          <a className='text-white' href='https://twitter.com/hassibmoddasser'>
            Hassib Moddasser
          </a>
        </p>
      </div>
    </div>
  )
}

export default About