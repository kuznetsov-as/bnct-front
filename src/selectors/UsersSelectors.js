import {createSelector} from "reselect";

const getUsers = (state) => state.usersPage.users

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})