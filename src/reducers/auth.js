import Cookies from 'cookies-js'

const initState = {
    login: Cookies.get('AuthToken') ? true : false,
}

export default function (state, action) {
    if (!state) return initState

    var newState


    switch (action.type) {
        case 'AUTH_USER_SUCCESS': {
            newState = { ...{}, ...state }
            newState.login = true
            break
        }
        
        case 'AUTH_USER_LOGOUT': {
            Cookies.expire('AuthToken');
            newState = { ...{}, ...state }
            newState.login = false
            break
        }

        default:
        break
    }

    return newState ? newState : state
}
