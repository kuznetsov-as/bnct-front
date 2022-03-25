import {addPostActionCreator, postChangeActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {

        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText) => {
            dispatch(postChangeActionCreator(newText))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default PostsContainer