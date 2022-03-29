const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        }

        case UNFOLLOW: {
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                // users: [...action.users]
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}

export const followActionCreator = (id) => {
    return {type: FOLLOW, id: id}
}

export const unfollowActionCreator = (id) => {
    return {type: UNFOLLOW, id: id}
}

export const setUsersActionCreator = (users) => {
    return {type: SET_USERS, users: users}
}


export default usersReducer