import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsWrapper/FormsWrapper";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {addPostActionCreator, setProfileThunkCreator} from "../../Redux/ProfileReducer";
import {loginThunkCreator, logoutThunkCreator} from "../../Redux/AuthReducer";
import {Navigate} from "react-router-dom";
import React from "react";
import styles from "../common/FormsWrapper/FormsWrapper.module.css";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field
                    placeholder={"Login"}
                    name={"login"}
                    component={Input}
                    validate={[required]}
                />
            </div>

            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required]}/>
            </div>

            <div>
                <Field
                    type="checkbox"
                    name={"rememberMe"}
                    component={Input}
                />Запомнить меня
            </div>

            <div className={styles.SummaryError}>
                {props.error}
            </div>

            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm =  reduxForm({
form: 'login'
})(LoginForm)


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        loginThunkCreator: (login, password, rememberMe) => {
            dispatch(loginThunkCreator(login, password, rememberMe))
        },
        logoutThunkCreator: () => {
            dispatch(logoutThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
