import style from './FooterLinks.module.css'

const FooterLinks=()=>{
    return(
        <div className={style.linksContainerFooter} >
            <a className={style.linkInFooter} href="#">Партнерам</a>
            <a className={style.linkInFooter} href="#">Разработчикам</a>
            <a className={style.linkInFooter} href="#">Вакансии</a>
        </div>
    )
}

export default FooterLinks