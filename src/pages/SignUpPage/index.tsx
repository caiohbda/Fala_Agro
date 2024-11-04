import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "../../schemas/singUpSchema"; // Importe o schema
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import userService from "../../services/userService";
import * as z from "zod";

type SignUpInputs = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    try {
      await userService.createUser(data); // Chama o serviço para cadastrar o usuário
      console.log("Usuário cadastrado com sucesso:", data);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
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
                id="Email"
                type="email"
                register={register("email")}
                error={errors.email?.message}
              />
              <Input
                label="Senha*"
                id="Password"
                type="password"
                register={register("password")}
                error={errors.password?.message}
              />
              <Input
                label="Nome Completo*"
                id="FullName"
                type="text"
                register={register("fullName")}
                error={errors.fullName?.message}
              />
              <Input
                label="Nome de Usuário*"
                id="Username"
                type="text"
                register={register("username")}
                error={errors.username?.message}
              />
              <Input
                label="Telefone*"
                id="PhoneNumber"
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
