import "./style.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "../../services/userService";
import { User } from "../../interfaces/IUserAPI";

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const users = await UserService.getUser();
        const loggedInUser = users[0];
        setUser(loggedInUser);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    navigate("/editar-perfil");
  };

  const handleLogout = () => {
    alert("Você saiu com sucesso!");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja apagar sua conta?"
    );
    if (confirmDelete) {
      alert("Conta apagada com sucesso.");
      navigate("/login");
    }
  };

  return (
    <div className="ProfilePage">
      <Header />
      <div className="background"></div>
      <div className="profile-container">
        <h2 className="profile-title">MEUS DADOS</h2>
        <div className="profile-content">
          <div className="profile-sidebar">
            {user && (
              <>
                <img
                  src={user.image || "caminho/para/default-image.png"}
                  alt="Foto de perfil"
                  className="profile-image"
                />
                <h3>{user.fullName}</h3>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </>
            )}
            <input
              type="button"
              value="Editar Perfil"
              className="edit-button"
              onClick={handleEditProfile}
            />
            <input
              type="button"
              value="Sair"
              className="logout-button"
              onClick={handleLogout}
            />
          </div>
          <div className="profile-details">
            <h3>Dados Pessoais</h3>
            <p className="profile-description">
              Gerencie seus dados cadastrais e de acesso
            </p>
            {user && (
              <div className="details-list">
                <div className="detail-item">
                  <span>Usuário</span>
                  <p>{user.username}</p>
                </div>
                <div className="detail-item">
                  <span>Email</span>
                  <p>{user.email}</p>
                </div>
                <div className="detail-item">
                  <span>Nome Completo</span>
                  <p>{user.fullName}</p>
                </div>
                <div className="detail-item">
                  <span>Telefone</span>
                  <p>{user.phoneNumber || "Não informado"}</p>
                </div>
              </div>
            )}
            <div className="button-container">
              <input
                type="button"
                value="Apagar minha conta"
                className="delete-account-button"
                onClick={handleDeleteAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
