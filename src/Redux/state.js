import {rerender} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Hi, gays, how are you?'},
            {id: 3, message: 'I am fine!'}
        ]
    },

    dialogsPage: {
        personsData: [
            {id: 1, name: 'Паша'},
            {id: 2, name: 'Вася'},
            {id: 3, name: 'Оля'},
            {id: 4, name: 'Дима'},
            {id: 5, name: 'Витя'},
            {id: 6, name: 'Коля'},
            {id: 7, name: 'Олег'}
        ],

        messagesData: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Hi!'},
            {id: 3, message: 'Привет!'}
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: state.profilePage.postsData.length + 1,
        message: postMessage
    }

    state.profilePage.postsData.push(newPost)
    rerender(state)
}

export default state