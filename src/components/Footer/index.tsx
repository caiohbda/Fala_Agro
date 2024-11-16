import './style.css';
import {FaInstagram, FaFacebook, FaLinkedin, FaGooglePlay, FaApple} from 'react-icons/fa';
 
const Footer = () => {
    return (
        <footer>
            <div className="socials">
                <div className="links">
                    <p>Siga-nos também nas redes sociais: </p>
                    <a target='_blank' href="https://www.instagram.com/falaagroapp/"><FaInstagram /></a>
                    <a target='_blank' href="https://www.facebook.com/falaagroapp/"><FaFacebook /></a>
                    <a target='_blank' href="https://www.linkedin.com/company/fala-agro"><FaLinkedin /></a>
                </div>
                <div className="links">
                    <p>Baixe nosso aplicativo: </p>
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.falaagro.falaagro"><FaGooglePlay /></a>
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.falaagro.falaagro"><FaApple /></a>
                </div>
            </div>
            <p className='slogan italic'>O aplicativo que dá voz ao setor rural.</p>
            <p className="copyright italic">&copy; Fala Agro 2024</p>
        </footer>
    )
}

export default Footer;