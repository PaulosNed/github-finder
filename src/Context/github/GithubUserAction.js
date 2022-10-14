
export const getUser = async(login) => {
    
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
      headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
      }
    }) 
    if (response.status === 404){
      window.location = '/notfound'
    } else {
      const data = await response.json()
      return data
    }
  }


export const getUserRepos = async (login) => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`, {
      headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
      }
    }) 
      const data = await response.json()
      return data
  }


export const searchUsers = async(term) => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${term}`, {
      headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
      }
    })

    const data = await response.json()
    return data
  }