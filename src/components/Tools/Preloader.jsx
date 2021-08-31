import s from './Preloader.module.css'
import image from '../../assets/images/user.png'

const Preloader = () => {
    return <div className={s.preloader}>
        <div className={s.spinner}>

        </div>
    </div>
}

export default Preloader;