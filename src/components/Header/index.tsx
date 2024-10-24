import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import user from "../../assets/icons/user.png";
import icon from "../../assets/icons/simbolo-falaagro-1.png";
import menu from "../../assets/icons/menu.png";
import "./style.css";

const Header = () => {
    const menuItems: string[] = ["Home", "Noticias", "Eventos", "Negocios"];
    const estadosBrasileiros: string[] = [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
        "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
        "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
        "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina",
        "São Paulo", "Sergipe", "Tocantins"
    ];

    const toggleDropdown = (event: React.MouseEvent) => {
        const dropdown = event.currentTarget.querySelector('.dropdown');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    };

    return (
        <header>
            <img className="menu" src={menu} alt="menu hamburger" />
            <img className="nav-banner" src={logo} alt="Logo Fala Agro" />
            <img className="nav-logo" src={icon} alt="Fala Agro" />
            <input className="search" placeholder="Pesquisar..." type="search" name="search" id="search" />
            <nav>
                <ul>
                    {menuItems.map(item => (
                        <li key={item} className="nav-item" onClick={item !== "Home" ? toggleDropdown : undefined}>
                            <Link className="nav-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                            {item !== "Home" && (
                                <ul className="dropdown">
                                    {estadosBrasileiros.map(estado => (
                                        <li key={estado}>
                                            <Link to={`/${item.toLowerCase()}/${estado.toLowerCase()}`}>{estado}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
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

export default Header;
