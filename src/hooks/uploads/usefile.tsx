import { useState } from "react";
import { uploadCombinedSchema } from "../../schema/uploads/uploads";
import { api } from "../../services/api";
import { ZodError } from "zod";
import { AxiosError } from "axios";

export function useFile(setImageUrl: (url: string) => void) {
  const [file, setFile] = useState<File | null>(null);

  async function onSUbmit(category: string) {
    try {
      // Validar ambos (file e category) juntos
      uploadCombinedSchema.parse({
        file: file
          ? {
              filename: file.name,
              mimetype: file.type,
              size: file.size,
            }
          : undefined,
        category,
      });

      // Preparar FormData para envio
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }
      formData.append("category", category);

      const response = await api.post("/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const url = response.data.path;
      console.log("🚀 URL recebida:", response.data.path);
      return url

      
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error)
        alert(error.issues[0].message);
      } else if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      } else {
        console.error(error);
      }
    }
  }

  return { file, setFile, onSUbmit };
}
