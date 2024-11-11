import * as z from "zod";

const signUpSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .nonempty("Esse campo é obrigatório"),
  password: z
    .string()
    .min(8, "Mínimo 8 caracteres")
    .nonempty("Esse campo é obrigatório"),
  fullName: z.string().nonempty("Esse campo é obrigatório"),
  username: z.string().nonempty("Esse campo é obrigatório"),
  phoneNumber: z.string().nonempty("Esse campo é obrigatório"),
});

export default signUpSchema;
