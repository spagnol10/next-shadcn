import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { SidebarFooter } from "../ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Sibebar() {
 
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r 
      bg-background sm:flex flex-col ">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
              text-primary-foreground rounded-full">
              <Package className="w-4 h-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                  text-muted-foreground transition-colors hover:text-foreground">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                  text-muted-foreground transition-colors hover:text-foreground">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="sr-only">Orders</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Orders</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                  text-muted-foreground transition-colors hover:text-foreground">
                  <Package className="w-4 h-4" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                  text-muted-foreground transition-colors hover:text-foreground">
                  <Users className="w-4 h-4" />
                  <span className="sr-only">Clients</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clients</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                  text-muted-foreground transition-colors hover:text-foreground">
                  <Settings2 className="w-4 h-4" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                  text-muted-foreground transition-colors hover:text-foreground">
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">LogOut</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="sticky top-0 z-30 flex h-14 items-center px-4 border-b 
          backgorund gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent 
          sm:px-6"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Open / Close</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg 
                  items-center justify-center text-primary-foreground 
                  md:text-base gap-2"
                  prefetch={false}>
                  <Package className="w-5 h-5 transition-all" />
                  <span className="sr-only">Logo</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground"
                  prefetch={false}>
                  <Home className="w-5 h-5 transition-all" />
                  Home
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground"
                  prefetch={false}>
                  <ShoppingBag className="w-5 h-5 transition-all" />
                  Orders
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground"
                  prefetch={false}>
                  <Package className="w-5 h-5 transition-all" />
                  Products
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground"
                  prefetch={false}>
                  <Users className="w-5 h-5 transition-all" />
                  Clients
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground"
                  prefetch={false}>
                  <Settings2 className="w-5 h-5 transition-all" />
                  Settings
                </Link>
              </nav>

              <SidebarFooter>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground"
                    prefetch={false}>
                    <LogOut className="w-5 h-5 transition-all" />
                    logOut
                  </Link>
                </nav>
              </SidebarFooter>
            </SheetContent>

          </Sheet>
        </header>
      </div>
    </div>
  );
}
