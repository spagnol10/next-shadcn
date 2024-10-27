import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Package, PanelBottom } from "lucide-react";

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

            <SheetContent className="sm:max-w-x">
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
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
