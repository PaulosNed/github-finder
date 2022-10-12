import { createContext, useReducer} from "react";
import githubReducer from "./GithubUserReducer";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
  
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)
  const setLoading = (isLoading) => {
    dispatch({
      type: "SET_LOADING",
      payload: {
        loading: isLoading
      }
    })
  }

  const getUser = async(login) => {
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
      headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
      }
    }) 
    if (response.status === 404){
      window.location = '/notfound'
    } else {
      const data = await response.json()

      dispatch({
        type: "GET_USER_PROFILE",
        payload: {
          user: data
        }
      })
    }
  }

  const getUserRepos = async (login) => {
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`, {
      headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
      }
    }) 
      const data = await response.json()

      dispatch({
        type: "GET_USER_REPO",
        payload: {
          repos: data
        }
      })
      console.log(data)
      // console.log(state.repos)
  }

  const searchUsers = async(term) => {
    setLoading(true)
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${term}`, {
      headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
      }
    })

    const data = await response.json()
    dispatch({
      type: "GET_USER",
      payload: {
        users: data.items
      }
    })
  }

  const clearUsers = () => {
    setLoading(true)
    dispatch({
      type: "CLEAR_USERS"
    })
  }

  //{*to just fetch users for test purpose*}

  // const fetchUsers = async () => {
  //   setLoading(true)
  //   const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //       headers: {
  //           Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
  //       }
  //   })
  //   const data = await response.json()

  //   dispatch({
  //     type: "GET_USER",
  //     payload: {
  //       users: data
  //     }
  //   })
  // }
  // useEffect(() => {
  //   fetchUsers()
  // }, [])


    return <UserContext.Provider value={{users: state.users, isLoading: state.loading, user: state.user, repos: state.repos, getUserRepos, searchUsers, clearUsers, getUser}}>
        {children}
    </UserContext.Provider>
}