import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Home, Package, PanelBottom, Settings2, ShoppingBag, Users } from "lucide-react";

export function Sibebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
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
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
