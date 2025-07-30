import { useMutation } from "@tanstack/react-query";
import { api } from "../../services/api";

type api = {
  url:string
}

async function createCheckoutSession() {
  const response = await api.post<api>("/stripe/create-checkout-session");
  return response.data.url;
}

export function useStripeCheckout() {
  return useMutation({
    mutationFn:createCheckoutSession,
    onSuccess:(data)=>{
      window.location.href = data

    }
  });
}
