import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox";
import * as z from "zod";
import { login } from "../../services/authService";
import loginSchema from "../../schemas/loginSchema";

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const result = await login(data.email, data.password);
      console.log(result);
      navigate("/home");
    } catch (error) {
      console.error("Erro de login:", error);
      setLoginError("Credenciais inválidas. Tente novamente.");
    }
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
          {loginError && <p className="error-message">{loginError}</p>}
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
