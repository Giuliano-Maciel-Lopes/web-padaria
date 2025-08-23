import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import { QuerySchemaReport } from "../../schema/reportDay";
import type { ApiResponseReportIndex } from "../../types/api/report";

async function fetchData(date?: string | null) {
  QuerySchemaReport.parse({date});
  const res = await api.get<ApiResponseReportIndex>("report_day", {
    params: { date },
  });

  return res.data;
}

export function useIndexReportDay(date?: string | null) {
  const query = useQuery({
    queryFn: () => fetchData(date),
    queryKey: ["reportday", date],
  });
  return { ...query };
}
