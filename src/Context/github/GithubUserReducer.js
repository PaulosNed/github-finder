const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USER':
            return {
                ...state,
                users: action.payload.users,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
                loading: false
            }
        case "GET_USER_PROFILE":
            return {
                ...state,
                user: action.payload.user,
                loading: false
            }
        case "GET_USER_REPO":
            return {
                ...state,
                repos: action.payload.repos,
                loading: false
            }
        default:
            return state
    }
}

export default githubReducer