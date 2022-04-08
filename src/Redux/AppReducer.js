import {setProfileInHeaderThunkCreator} from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED'


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}


export const setInitialState = () => {
    return {type: SET_INITIALIZED}
}

export const initialAppThunkCreator = () => {
    return (dispatch) => {
        dispatch(setProfileInHeaderThunkCreator()).then(() => {
         dispatch(setInitialState())
        })
    }
}

export default appReducer