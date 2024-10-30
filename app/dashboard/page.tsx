import { ChartOverview } from "@/components/chart";
import { Chart } from "@/components/chart/pieChart";
import { AppChart } from "@/components/dashboard/chart/app-chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Percent, Users } from "lucide-react";

export default function DashBoard() {
  const totalSales = "R$40.000,00";
  const totalClients = 327;
  const ordersTodayPercentage = "31%";

  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">Sales</CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total sales</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">{totalSales}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">Clients</CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>New Clients</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">{totalClients}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">Orders today</CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total orders today</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">{ordersTodayPercentage}</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4 grid gap-4">
        <ChartOverview />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <AppChart />
        <Chart />
        <Sales />
      </div>
    </>
  );
}