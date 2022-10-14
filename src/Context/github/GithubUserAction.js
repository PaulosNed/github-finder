import axios from "axios"

const github = axios.create({
    baseURL: process.env.REACT_APP_GITHUB_URL,
    // headers: {
    //     Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
    // }
})

export const getUser = async(login) => {
    
    const response = await github.get(`/users/${login}`) 
    if (response.status === 404){
      window.location = '/notfound'
    } else {
      return response.data
    }
  }


export const getUserRepos = async (login) => {
    const response = await github.get(`/users/${login}/repos`)
    if (response.status === 404){
        return []
    }
    return response.data
  }


export const searchUsers = async(term) => {
    const response = await github.get(`/search/users`, { params: { q: term } })
    console.log(response.data)
    if (response.status === 404){
        window.location = '/notfound'
      } else {
        return response.data
      }
  }