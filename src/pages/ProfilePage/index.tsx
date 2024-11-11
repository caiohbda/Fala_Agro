
import "./style.css";
import Header1 from '../../components/Header1';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";

interface ProfileData {
    nome: string;
    sobrenome: string;
    senha: string;
    "alterar-senha": string; 
}

const ProfilePage = () => {
    const { register, handleSubmit } = useForm<ProfileData>(); 

    const onSubmit = (data: ProfileData) => {
        console.log(data);
       
    };

    return (
        <div className="ProfilePage">
            <Header1 />
            <div className="profile-container">
                <h2>Perfil</h2>
                <div className="image-upload-container">
                    <input type="file" accept="image/*" className="profile-image-upload" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
                    <Input 
                        label="Nome" 
                        type="text" 
                        id="nome" 
                        register={register("nome", { required: "Nome é obrigatório" })} 
                    />
                    <Input 
                        label="Sobrenome" 
                        type="text" 
                        id="sobrenome" 
                        register={register("sobrenome", { required: "Sobrenome é obrigatório" })} 
                    />
                    <Input 
                        label="Senha" 
                        type="password" 
                        id="senha" 
                        register={register("senha", { required: "Senha é obrigatória" })} 
                    />
                    <Input 
                        label="Alterar Senha" 
                        type="password" 
                        id="alterar-senha" 
                        register={register("alterar-senha", { required: "Alterar senha é obrigatório" })} 
                    />
                    <Button value="Salvar" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
