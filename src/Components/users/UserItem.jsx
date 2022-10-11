import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/github/GithubUserContext'

function UserItem({user}) {
    const {getUser} = useContext(UserContext)
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div className="avatar">
                <div className="rounded shadow w-14 h-14">
                    <img src={user.avatar_url} alt="Profile" />
                </div>
            </div>
            <div>
                <h2 className="card-title">{user.login}</h2>
                <p onClick={() => getUser(user.login)} className="text-base-content text-opacity-40">Visit Profile</p>
            </div>
        </div>
    </div>
  )
}

export default UserItem