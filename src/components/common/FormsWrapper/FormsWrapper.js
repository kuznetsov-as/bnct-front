import styles from "./FormsWrapper.module.css"

 export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.FormsWrapper + " " + (hasError? styles.Error : "")}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.FormsWrapper + " " + (hasError? styles.Error : "")}>
            <div><input {...input} {...props}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}