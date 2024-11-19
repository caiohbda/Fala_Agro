import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./style.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const states = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const newsSchema = z.object({
  title: z.string().min(5, "O título deve ter pelo menos 5 caracteres"),
  content: z.string().min(20, "O conteúdo deve ter pelo menos 20 caracteres"),
  state: z
    .string()
    .length(2, "Informe o estado com 2 caracteres (sigla)")
    .toUpperCase(),
  city: z.string().min(3, "A cidade deve ter pelo menos 3 caracteres"),
  image: z
    .any()
    .refine(
      (files) => files && files[0]?.size < 2 * 1024 * 1024,
      "A imagem deve ter menos de 2MB"
    )
    .optional(),
});

type NewsFormData = z.infer<typeof newsSchema>;

const PostNewsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsFormData>({
    resolver: zodResolver(newsSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: NewsFormData) => {
    const formData = {
      ...data,
      image: data.image?.[0],
    };

    console.log("Dados da notícia:", formData);

    navigate("/noticias");
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h1>Publicar Notícia</h1>

          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input id="title" type="text" {...register("title")} />
            {errors.title && (
              <p className="error-message">{String(errors.title.message)}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="content">Conteúdo</label>
            <textarea id="content" {...register("content")} />
            {errors.content && (
              <p className="error-message">{String(errors.content.message)}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="state">Estado</label>
            <select id="state" {...register("state")}>
              <option value="">Selecione um estado</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="error-message">{String(errors.state.message)}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" {...register("city")} />
            {errors.city && (
              <p className="error-message">{String(errors.city.message)}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="image">Imagem</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              {...register("image")}
            />
            {errors.image && (
              <p className="error-message">{String(errors.image.message)}</p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Publicar Notícia
          </button>
        </form>
      </div>
    </>
  );
};

export default PostNewsPage;
