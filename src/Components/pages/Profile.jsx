import React, { useContext } from 'react'
import { UserContext } from '../../Context/github/GithubUserContext'

function Profile() {
    // const params = useParams()
    const {user} = useContext(UserContext)

  return (
    <div>in profile with id: {user.login}</div>
  )
}

export default Profile