import cart from "../../assets/carrinho.png";
import encomenda from "../../assets/package.svg";
import money from "../../assets/money.svg";
import calendar from "../../assets/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InfoValue } from "../../components/ADMreports/infovalues";
import type { ApiResponseReportIndex } from "../../types/api/report";
import { currencyBRL } from "../../utils/currencyBRL";

type Props = {
  data: ApiResponseReportIndex;
   selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
};

export function AgroupInfoValues({setSelectedDate , selectedDate , data }: Props) {
  

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <InfoValue
        img={calendar}
        colorClass="bg-gray-500"
        mensagem="escolha uma data "
      >
        <DatePicker
          showIcon
          toggleCalendarOnIconClick
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Selecione uma data"
          className="border rounded px-2 py-1 w-full"
        />
        <p>obs:caso nao selecione uma data mostrara resultado da semana</p>
      </InfoValue>

      <InfoValue
        img={money}
        colorClass="bg-green-500"
        mensagem="vendas do dia "
      >
        <div className="text-center text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-medium text-gray-600">Total:</span>{" "}
            <span className="text-lg font-bold text-green-700">
              {currencyBRL(data.daySales.totalSales)}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-600">Total pedidos:</span>{" "}
            <span className="text-lg font-bold">{data.daySales.totalOrders}</span>
          </p>
        </div>
      </InfoValue>

      <InfoValue
        img={cart}
        colorClass="bg-blue-500"
        mensagem="vendas desse mês"
      >
        <div className="flex items-center justify-center mt-6 text-2xl font-bold text-blue-700">
          {currencyBRL(data.monthSales.totalAmountMonth)}
        </div>
      </InfoValue>

      <InfoValue
        img={encomenda}
        colorClass="bg-red-500"
        mensagem="total pedidos do mês"
      >
        <div className="flex items-center justify-center mt-6 text-2xl font-bold text-red-700">
          {data.monthSales.ordersMonth}
        </div>
      </InfoValue>
    </div>
  );
}
