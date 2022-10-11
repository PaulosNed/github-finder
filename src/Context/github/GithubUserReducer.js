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
                loading: action.payload.loading
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
                loading: action.payload.loading
            }
        default:
            return state
    }
}

export default githubReducer