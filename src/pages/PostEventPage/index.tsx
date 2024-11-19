import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./style.css";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const eventSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres"),
  date: z
    .string()
    .refine((value) => !isNaN(new Date(value).getTime()), "Data inválida"),
  location: z.string().min(5, "A localização deve ter pelo menos 5 caracteres"),
  image: z
    .any()
    .refine(
      (files) => files && files[0]?.size < 2 * 1024 * 1024,
      "A imagem deve ter menos de 2MB"
    )
    .optional(),
});

type EventFormData = z.infer<typeof eventSchema>;

const PostEventPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: EventFormData) => {
    const formData = {
      ...data,
      image: data.image?.[0],
    };

    console.log("Dados do evento:", formData);

    navigate("/eventos");
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <h1>Publicar Evento</h1>

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
            <label htmlFor="date">Data</label>
            <input id="date" type="date" {...register("date")} />
            {errors.date && (
              <p className="error-message">{String(errors.date.message)}</p>
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
            Publicar Evento
          </button>
        </form>
      </div>
    </>
  );
};

export default PostEventPage;
