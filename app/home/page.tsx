import { AppSidebar } from "@/components/app-sidebar"
import { ChartOverview } from "@/components/chart"
import { Sales } from "@/components/sales"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DollarSign, Percent, Users } from "lucide-react"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl select-none">
                    Sales
                  </CardTitle>
                  <DollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                  Total sales
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm:text-lg font-bold">R$40.000.00</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl  select-none">
                    Clients
                  </CardTitle>
                  <Users className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                  New Clients
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm:text-lg font-bold">327</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center">
                  <CardTitle className="text-lg sm:text-xl  select-none">
                    Orders today
                  </CardTitle>
                  <Percent className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                  Total orders today
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-base sm:text-lg font-bold">31%</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <ChartOverview />
            <Sales />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}
