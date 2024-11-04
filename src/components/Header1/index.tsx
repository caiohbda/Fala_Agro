import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import user from "../../assets/icons/user.png";
import icon from "../../assets/icons/simbolo-falaagro-1.png";
import menu from "../../assets/icons/menu.png";
import "./style.css";

const Header1 = () => {
    const menuItems: string[] = ["Home"];

    return (
        <header>
            <img className="menu" src={menu} alt="menu hamburger" />
            <img className="nav-banner" src={logo} alt="Logo Fala Agro" />
            <img className="nav-logo" src={icon} alt="Fala Agro" />
            <input className="search" placeholder="Pesquisar..." type="search" name="search" id="search" />
            <nav>
                <ul>
                    {menuItems.map(item => (
                        <li key={item} className="nav-item">
                            <Link className="nav-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="user-container">
                <div className="user-info">
                    <Link to="/login">
                        <img className="user-icon" src={user} alt="ícone de usuário" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header1;
