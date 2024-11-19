import "./style.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom"; 

const ProfilePage = () => {
    const navigate = useNavigate(); 

    const handleEditProfile = () => {
        navigate("/editar-perfil"); 
    };

    const handleLogout = () => {
        alert("Você saiu com sucesso!");
        navigate("/login");
    };

   
    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm("Tem certeza que deseja apagar sua conta?");
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
                        <img src="caminho/para/sua-imagem.png" alt="Foto de perfil" className="profile-image" />
                        <h3>Nome do Usuário</h3>
                        <p>@usuario</p>
                        <p>Informações adicionais</p>
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
                        <p className="profile-description">Gerencie seus dados cadastrais e de acesso</p>
                        <div className="details-list">
                            <div className="detail-item">
                                <span>Usuário</span>
                                <p>@usuario</p>
                            </div>
                            <div className="detail-item">
                                <span>Email</span>
                                <p>@email.com</p>
                            </div>
                            <div className="detail-item">
                                <span>Nome Completo</span>
                                <p>Nome Completo do Usuário</p>
                            </div>
                            <div className="detail-item">
                                <span>Telefone</span>
                                <p>Não informado</p>
                            </div>
                            <div className="detail-item">
                                <span>CPF</span>
                                <p>Não informado</p>
                            </div>
                        </div>
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
