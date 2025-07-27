import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "../../utils/uploadsutils.js";
import { categorie } from "../../utils/categorias.js";

const uploadFileSchema = z.object({
  filename: z.string().min(1, "Nome do arquivo é obrigatório"),
  mimetype: z
    .string()
    .refine(
      (type) => ACCEPTED_IMAGE_TYPES.includes(type),
      "Formato de arquivo inválido. Apenas JPEG e PNG são permitidos."
    ),
  size: z
    .number()
    .positive()
    .refine(
      (size) => size <= MAX_FILE_SIZE,
      "Arquivo excede o tamanho máximo permitido"
    ),
}).passthrough();

const uploadCategorySchema = z.enum(categorie, {
  errorMap: () => ({ message: "Categoria inválida/ categoria obrigatoria com imagem " }),
});

export const uploadCombinedSchema = z
  .object({
    file: uploadFileSchema.optional(),
    category: uploadCategorySchema.optional(),
  })
  .refine((data) => {
    // Se tem arquivo, categoria deve ser obrigatória e válida
    if (data.file) {
      return data.category !== undefined;
    }
    // Se não tem arquivo, categoria pode ser opcional
    return true;
  }, {
    message: "Categoria é obrigatória quando o arquivo é enviado",
    path: ["category"],
  });
