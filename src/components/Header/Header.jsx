import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return <div className={s.header}>
        <div className={s.logo}>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png" alt=""/>
            <div>
                <p>React</p>
                <p>Social</p>
                <p>Network</p>
            </div>
        </div>
        <div className={s.headerContent}>
            {props.isAuth
                ? <div>
                    {props.log} <span placeholder={'LogOut'} onClick={props.logout}>Logout</span>
                </div>
                : <NavLink to='/login'>login</NavLink>}
        </div>
    </div>
}

export default Header