import style from './Logo.module.css'

const Logo = () => {
    return(
        <div className={style.logoContainer}>
            <span className={style.FirstCharLogo}>C</span>
            <span>ounter</span>
        </div>
    )
}

export default Logo