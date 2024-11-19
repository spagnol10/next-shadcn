"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, MessageSquare, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home({
  clientName = "Josep",
  avatarUrl = "https://github.com/shadcn.png",
  memberSince = "2023"
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={avatarUrl} alt={clientName} />
              <AvatarFallback>{clientName[0]}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl font-bold">Welcome back, {clientName}!</CardTitle>
          <CardDescription>Were glad to see you again. Heres whats new since your last visit.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary" className="text-sm py-1">
              Member since {memberSince}
            </Badge>
            <Badge variant="secondary" className="text-sm py-1">
              Premium Client
            </Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Resources</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between flex-wrap gap-4">
          <Button onClick={() => router.push('/dashboard/settings/account')} variant="outline">View Profile</Button>
          <Button onClick={() => router.push('/dashboard')}>
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
