import { toast } from "react-toastify";

export function toastSuccessCutomer(message: string) {
  toast.success(message, {
    icon: false,
    position: "bottom-center",
    style: {
      background: "#8B5E3C",
      color: "#F9F4E7",
    },
  });
}
