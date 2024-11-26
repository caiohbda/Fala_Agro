import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HeaderProps } from "../../interfaces/IHeader";
import logo from "../../assets/img/logo.png";
import user from "../../assets/icons/user.png";
import icon from "../../assets/icons/simbolo-falaagro-1.png";
import menu from "../../assets/icons/menu.png";
import "./style.css";

const Header: React.FC<HeaderProps> = ({ onStateChange }) => {
  const menuItems: string[] = ["Home", "Noticias", "Eventos", "Negocios"];
  const estadosBrasileiros: { [key: string]: string } = {
    Acre: "AC",
    Alagoas: "AL",
    Amapá: "AP",
    Amazonas: "AM",
    Bahia: "BA",
    Ceará: "CE",
    "Distrito Federal": "DF",
    "Espírito Santo": "ES",
    Goiás: "GO",
    Maranhão: "MA",
    "Mato Grosso": "MT",
    "Mato Grosso do Sul": "MS",
    "Minas Gerais": "MG",
    Pará: "PA",
    Paraíba: "PB",
    Paraná: "PR",
    Pernambuco: "PE",
    Piauí: "PI",
    "Rio de Janeiro": "RJ",
    "Rio Grande do Norte": "RN",
    "Rio Grande do Sul": "RS",
    Rondônia: "RO",
    Roraima: "RR",
    "Santa Catarina": "SC",
    "São Paulo": "SP",
    Sergipe: "SE",
    Tocantins: "TO",
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleStateChange = (estado: string) => {
    if (onStateChange) onStateChange(estado);
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <img
        className="menu"
        src={menu}
        alt="menu hamburger"
        onClick={toggleDropdown}
      />
      <img className="nav-banner" src={logo} alt="Logo Fala Agro" />
      <img className="nav-logo" src={icon} alt="Fala Agro" />
      <input
        className="search"
        placeholder="Pesquisar..."
        type="search"
        name="search"
        id="search"
      />
      <nav className={isDropdownOpen ? "mobile-show" : "mobile-hidden"}>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              className="nav-item"
              onClick={item !== "Home" ? toggleDropdown : undefined}
            >
              <Link className="nav-link" to={`/${item.toLowerCase()}`}>
                {item}
              </Link>
              {item !== "Home" && (
                <ul className="dropdown">
                  {Object.keys(estadosBrasileiros).map((estado) => (
                    <li key={estado}>
                      <a
                        onClick={() =>
                          handleStateChange(estadosBrasileiros[estado])
                        }
                        className="dropdown-item"
                      >
                        {estado}
                      </a>
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
          <Link className="user-link" to="/perfil">
            <img className="user-icon" src={user} alt="ícone de usuário" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
