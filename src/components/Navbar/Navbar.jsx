import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.navLink}>
                <NavLink to="/profile" activeClassName={s.activeLink}>My profile</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.navLink}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
        </div>
    );

}

export default Navbar;