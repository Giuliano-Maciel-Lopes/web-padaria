import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
  YAxis,
  CartesianGrid,
} from "recharts";
import type { ApiResponseReportIndex } from "../../types/api/report";
import type { ApiresponseShow } from "../../types/api/report/show";

export type Props ={
    data:ApiResponseReportIndex
    dataYears:ApiresponseShow
}

export function Graphics({data ,dataYears}:Props) {
  
  return (
   <div className="flex flex-col md:flex-row">
         <div className="h-64 w-1/2  mt-20">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={data.weekSales}>
               <XAxis dataKey="day" />
               <Tooltip formatter={(value) => `R$ ${Number(value).toFixed(2)}`} />
               <Bar dataKey="totalSales" fill="#4f46e5" radius={[6, 6, 0, 0]} />
             </BarChart>
           </ResponsiveContainer>
         </div>
   
         <div  className="h-64 w-1/2  mt-20">
         <ResponsiveContainer width="100%" height="100%">
         <AreaChart
           width={500}
           height={400}
           data={dataYears.months}
           margin={{
             top: 10,
             right: 30,
             left: 0,
             bottom: 0,
           }}
         >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="month" />
           <YAxis />
           <Tooltip />
           <Area type="monotone" dataKey="totalSales" stroke="#8884d8" fill="#8884d8" />
         </AreaChart>
       </ResponsiveContainer>
   
         </div>
         </div>
  );
}