import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Menu, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">MyApp</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              Dashboard
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              Projects
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              Tasks
            </Link>
            <Link href="#" className="flex items-center text-sm font-medium text-muted-foreground">
              Reports
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8 md:w-[300px] lg:w-[300px]" />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button size="icon" variant="ghost">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}