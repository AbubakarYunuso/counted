import style from './Footer.module.css'
import FooterCopyright from './FooterCopyright/FooterCopyright'
import FooterLinks from './FooterLinks/FooterLinks'
import FooterLogo from './FooterLogo/FooterLogo'

const Footer = ()=>{
    return(
        <div className={style.footerContainer}>
            <FooterLogo/>
            <FooterLinks/>
            <FooterCopyright/>
        </div>
    )
}

export default Footer