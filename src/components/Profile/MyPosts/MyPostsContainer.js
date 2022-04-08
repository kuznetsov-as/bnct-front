import {addPostActionCreator, postChangeActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        photo: state.auth.photo
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default PostsContainer