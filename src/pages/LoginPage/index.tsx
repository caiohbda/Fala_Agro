import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox";
import * as z from "zod";

const schema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .nonempty("Esse campo é obrigatório"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .nonempty("Esse campo é obrigatório"),
  remember: z.boolean().optional(),
});

type LoginFormInputs = z.infer<typeof schema>;

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // adicionar lógica de autenticação com o serviço
    console.log(data);

    navigate("/home");
  };

  return (
    <>
      <div className="background"></div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="modal">
        <div className="content">
          <div className="titlelogin">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputsdata">
              <div>
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
              </div>
              <Checkbox
                type="checkbox"
                id="remember"
                register={register("remember")}
                htmlFor="remember"
                value="Lembrar-me"
              />
            </div>
            <div className="button-container">
              <Button type="submit" value="Entrar" />
              <p className="link">
                <Link to="/signup">Cadastre-se</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
