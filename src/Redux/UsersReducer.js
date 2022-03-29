const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
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
            return {
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
                users: [...action.users]
            }
        }

        case SET_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }

        case SET_TOTAL_USERS_COUNT: {

            if (action.count > 55) {
                return {
                    ...state,
                    totalUsersCount: 55
                }
            } else {
                return {
                    ...state,
                    totalUsersCount: action.count
                }
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

export const setPageActionCreator = (page) => {
    return {type: SET_PAGE, page: page}
}

export const setTotalUsersCountActionCreator = (count) => {
    return {type: SET_TOTAL_USERS_COUNT, count: count}
}


export default usersReducer