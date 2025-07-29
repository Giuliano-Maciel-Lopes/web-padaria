import { api } from "../../services/api";

import {
  paramsSchema,
  type ParamsInput,
} from "../../schema/orders/updatestaatus";
import {
  updateBodySchemaIsHome,
  type UpdateInput,
} from "../../schema/orders/updateishome";
import { useMutation } from "@tanstack/react-query";

type FetchData = {
  params: ParamsInput;
  data: UpdateInput;
};

async function fetchaData({params , data}:FetchData) {
   paramsSchema.parse(params);
  updateBodySchemaIsHome.parse(data);

  await api.patch(`/orders/isHome/${params.id}`, data);
}

export function useUpdateisHome() {
  return useMutation({
    mutationFn: fetchaData,
  });
}
