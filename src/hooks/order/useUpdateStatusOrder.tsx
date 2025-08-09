import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bodySchemaStatus } from "../../schema/orders/updatestaatus";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { data } from "react-router";

type UseUpdateParams = {
  newStatus: string;
  id: string;
  oldStatus: string;
};

async function fetchData({ newStatus, id }: Pick<UseUpdateParams, "newStatus" | "id">) {
  bodySchemaStatus.parse({status:newStatus});
  const res = await api.patch(`/orders/status/${id}`, { status: newStatus }); 
  return res.data;
}

export function useUpdateStatusOrders() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UseUpdateParams) => fetchData(data),
    onSuccess: (data, { id, newStatus, oldStatus }) => {
      queryClient.invalidateQueries({ queryKey: ["ordersId", id] });
      queryClient.invalidateQueries({ queryKey: ["orders", newStatus] });
      queryClient.invalidateQueries({ queryKey: ["orders", oldStatus] });

      toast.success(data.message)
    },onError(er){
        console.log(er)
    }
  });
}
