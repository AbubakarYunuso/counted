import style from './Menu.module.css'

const Menu =()=>{
    return(
        <div className={style.menuContainer} >
            <div className={style.linksInMenu}>
                <a className={style.links} href="#">Главная</a>
                <a className={style.links} href="#">О нас</a>
                <a className={style.links} href="#">Контакты</a>
            </div>
        </div>
    )
}
export default Menu