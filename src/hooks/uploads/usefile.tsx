import { useState } from "react";
import { uploadCombinedSchema } from "../../schema/uploads/uploads";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";

export function useFile(setImageUrl: (url: string) => void) {
  const [file, setFile] = useState<File | null>(null);

  async function onSUbmit(category: string) {


  return errorHandler(async () => {
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
    return url;
  });
}


  return { file, setFile, onSUbmit };
}
