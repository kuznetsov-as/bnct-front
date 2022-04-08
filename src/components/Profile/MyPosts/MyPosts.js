import myPosts from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsWrapper/FormsWrapper";

const MyPosts = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.post)
    }

    let posts = props.profilePage.postsData.map(p => <Post photo={props.photo} key={p.id} message={p.message}/>)


    return (
        <div className={myPosts.MyPosts}>
            <div>
                <PostReduxForm onSubmit={onSubmit}/>
                <div>
                    {posts}
                </div>
            </div>
        </div>
    )
}

let maxLength = maxLengthCreator(10)

export const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"post"}
                component={Textarea}
                placeholder={"Напиши что-нибудь на своей стене"}
                validate={[required, maxLength]}
            />
            <button>Add post</button>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)


export default MyPosts