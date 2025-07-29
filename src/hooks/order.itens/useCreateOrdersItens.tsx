import { api } from "../../services/api";

import { createOrderItemsSchema , type CreateOrderItemsInput } from "../../schema/orderItens/create";
import { useMutation, useQueryClient } from "@tanstack/react-query";
type fetchdata ={
   orderId: string,
  data:CreateOrderItemsInput
  
}
async function fetchData({ data , orderId }:fetchdata) {
  createOrderItemsSchema.parse( data );
  await api.post(`orders_itens/${orderId}`, data);
}


export function useCreateOrdersItens() {
 const usequery = useQueryClient()
 return useMutation({
  mutationFn:fetchData,
  onSuccess:()=>{ 
    usequery.invalidateQueries({queryKey:["orders" , "processing"]})
  }
 })
  
}
