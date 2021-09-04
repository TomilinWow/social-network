import {useForm} from "react-hook-form";
import styles from "./Login.module.css"
import {authlogin, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
        setError
    } = useForm({mode: "onChange"})

    const login = watch('login')
    const password = watch('password')
    const checkbox = watch('checkbox')

    return (

        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={styles.inputField}>
                <input type="email" placeholder={'login'} {...register('login', {required: true, maxLength: 20})}/>
                <span className={styles.required}>
                    {errors.login && <i>Required field</i>}
                </span>
            </div>
            <div className={styles.inputField}>
                <input type={'password'} placeholder={'password'} {...register('password', {required: true, maxLength: 20})}/>
                <span className={styles.required}>
                    {errors.password && <i>Required field</i>}
                </span>
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

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger
        props.authlogin(formData.login, formData.password, formData.checkbox)
    }
    if (props.isAuth){
        return <Redirect to='/profile'/>
    }
    return <div className={styles.login}>
        <span>Login</span>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {authlogin, logout})(Login);