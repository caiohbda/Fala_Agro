import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "../../schemas/singUpSchema";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import userService from "../../services/userService";
import * as z from "zod";

type SignUpInputs = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    const { ...userData } = data;

    console.log("Dados a serem enviados:", userData);
    try {
      await userService.createUser(userData);
      console.log("Usuário cadastrado com sucesso:", userData);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      // Exibir erro para o usuário
      alert("Erro ao cadastrar o usuário. Tente novamente.");
    }
  };

  return (
    <>
      <div className="background"></div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="modal">
        <div className="content">
          <div className="titlelogin">
            <h1>Cadastre-se</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputsdata">
              <Input
                label="Email*"
                id="email"
                type="email"
                register={register("email")}
                error={errors.email?.message}
              />
              <Input
                label="Senha*"
                id="password"
                type="password"
                register={register("password")}
                error={errors.password?.message}
              />
              <Input
                label="Confirme a Senha*"
                id="confirmpassword"
                type="password"
                register={register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
              <Input
                label="Nome Completo*"
                id="fullName"
                type="text"
                register={register("fullName")}
                error={errors.fullName?.message}
              />
              <Input
                label="Nome de Usuário*"
                id="username"
                type="text"
                register={register("username")}
                error={errors.username?.message}
              />
              <Input
                label="Telefone*"
                id="phoneNumber"
                type="text"
                register={register("phoneNumber")}
                error={errors.phoneNumber?.message}
              />
            </div>
            <div className="button-container">
              <Button type="submit" value="Cadastrar" />
              <span>
                Já possui uma conta? <Link to="/">Faça login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
