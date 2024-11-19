import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";

const businessSchema = z.object({
  title: z.string().min(5, "O título deve ter pelo menos 5 caracteres"),
  description: z
    .string()
    .min(20, "A descrição deve ter pelo menos 20 caracteres"),
  price: z.number().min(1, "O preço deve ser maior que 0"),
  location: z.string().min(3, "A localização deve ter pelo menos 3 caracteres"),
  image: z
    .any()
    .refine(
      (files) => files && files[0]?.size < 2 * 1024 * 1024,
      "A imagem deve ter menos de 2MB"
    )
    .optional(),
});

type BusinessFormData = z.infer<typeof businessSchema>;

const PostBusinessPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessFormData>({
    resolver: zodResolver(businessSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: BusinessFormData) => {
    // Simula o envio dos dados
    const formData = {
      ...data,
      image: data.image?.[0], // Mantém a imagem (se houver)
    };

    // Exibe os dados no console
    console.log("Dados enviados do formulário:", formData);

    // Redireciona para a página de negócios
    navigate("/negocios");
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h1>Criar Novo Negócio</h1>

          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input id="title" type="text" {...register("title")} />
            {errors.title && (
              <p className="error-message">{String(errors.title.message)}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" {...register("description")} />
            {errors.description && (
              <p className="error-message">
                {String(errors.description.message)}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="price">Preço</label>
            <input
              id="price"
              type="number"
              {...register("price", {
                setValueAs: (value) => (value ? parseFloat(value) : 0),
              })}
            />
            {errors.price && (
              <p className="error-message">{String(errors.price.message)}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="location">Localização</label>
            <input id="location" type="text" {...register("location")} />
            {errors.location && (
              <p className="error-message">{String(errors.location.message)}</p>
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
            Criar Negócio
          </button>
        </form>
      </div>
    </>
  );
};

export default PostBusinessPage;
