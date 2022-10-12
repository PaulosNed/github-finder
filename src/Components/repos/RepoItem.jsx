import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <a href={html_url} target="_blank" rel="noreferrer" className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <p>
            <FaLink className='inline mr-1' /> {name}
          </p>
        </h3>
        <p className='mb-3'>{description}</p>
        <div className='flex flex-col gap-4 md:flex-row' >
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='mr-2 badge badge-success badge-lg'>
            <FaStar className='' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-error badge-lg'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='mr-2 badge badge-warning badge-lg'>
            <FaUtensils className='' /> {forks}
          </div>
        </div>
      </div>
    </a>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem