import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

import type { ApiResponseReportIndex } from "../../types/api/report";
import type { ApiresponseShow } from "../../types/api/report/show";

async function fetchData() {
  const res = await api.get<ApiresponseShow>("report_day/years");

  return res.data;
}

export function useShowReportDay() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["reportYears"],
  });
  return { ...query };
}
