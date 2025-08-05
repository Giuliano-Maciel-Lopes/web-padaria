import { AgroupInfoValues } from "../../components/ADMreports/agroupInfovalues";
import { LoadingFull } from "../../components/index/loadingfull";
import { useIndexReportDay } from "../../hooks/report/useindexReport";
import { Graphics } from "../../components/ADMreports/graphics";
import { useShowReportDay } from "../../hooks/report/useshowReport";
import { useState } from "react";
import {dayjs} from "../../utils/libs/dayjs"

export function AdminReportPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const formattedDate = selectedDate
    ? dayjs(selectedDate).tz("America/Sao_Paulo").format("YYYY-MM-DD")
    : undefined;

  const { isLoading, data } = useIndexReportDay(formattedDate);
  const { isLoading: isloadinYears, data: dataYears } = useShowReportDay();

  if (isLoading || isloadinYears) return <LoadingFull />;

  if (!data || !dataYears) return <div>Dados não encontrados</div>;

  console.log(JSON.stringify(data.weekSales, null, 2));
  console.log(JSON.stringify(dataYears.months, null, 2));

  return (
    <div className="min-h-screen p-6 flex flex-col">
      <AgroupInfoValues
        data={data}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Graphics data={data} dataYears={dataYears} />
    </div>
  );
}
