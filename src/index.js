import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let postsData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Hi, gays, how are you?'},
    {id: 3, message: 'I am fine!'}
]

let personsData = [
    {id: 1, name: 'Паша'},
    {id: 2, name: 'Вася'},
    {id: 3, name: 'Оля'},
    {id: 4, name: 'Дима'},
    {id: 5, name: 'Витя'},
    {id: 6, name: 'Коля'}
]


let messagesData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'Hi!'},
    {id: 3, message: 'Привет!'}
]


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postData={postsData} personsData={personsData} messagesData={messagesData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
