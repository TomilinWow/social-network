import s from './Header.module.css'

const Header = () => {
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
            
        </div>
    </div>
}

export default Header