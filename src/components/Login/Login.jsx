import {useForm} from "react-hook-form";
import styles from "./Login.module.css"

const LoginForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm({mode: "onChange"})

    const login = watch('login')
    const password = watch('password')
    const checkbox = watch('checkbox')

    return (

        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <input placeholder={'login'} {...register('login', {required: true, maxLength: 20})}/>
                {errors.login && <i>Required field</i>}
            </div>
            <div>
                <input placeholder={'password'} {...register('password', {required: true, maxLength: 20})}/>
                {errors.login && <i>Required field</i>}
            </div>
            <div className={styles.login}>
                <input type={'checkbox'} {...register('checkbox')}/> Remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const Login = () => {
    const onSubmit = (formData) => {
        alert()
        console.log(formData)
    }
    return <div className={styles.login}>
        <span>Login</span>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;