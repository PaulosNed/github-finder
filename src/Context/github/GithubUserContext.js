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

    return <UserContext.Provider value={{...state, dispatch}}>
        {children}
    </UserContext.Provider>
}