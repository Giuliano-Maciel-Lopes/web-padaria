export type ApiResponseReportIndex = {
  daySales: {
    id: string;
    date: string;
    totalSales: number;
    totalOrders: number;
    createdAt?: string; 
  };

  weekSales: {
    day: string;
    totalSales: number;
  }[];

  monthSales: {
    totalAmountMonth: number;
    ordersMonth: number;
  };
};
