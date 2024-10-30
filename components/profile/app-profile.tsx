import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Users, MessageCircle, Star } from "lucide-react"

export default function ProfileComponent({ 
  name = "Jane Doe", 
  username = "janedoe", 
  bio = "Product designer and developer", 
  avatarUrl = "/placeholder.svg?height=100&width=100",
  followers = 1234,
  following = 567,
  stars = 890
}) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{name}</CardTitle>
          <CardDescription>@{username}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{bio}</p>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">{followers.toLocaleString()} followers</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">{following.toLocaleString()} following</span>
          </div>
          <div className="flex items-center">
            <Star className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">{stars.toLocaleString()} stars</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Product Design</Badge>
          <Badge variant="secondary">UI/UX</Badge>
          <Badge variant="secondary">Development</Badge>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between">
        <Button variant="outline">Message</Button>
        <Button>Follow</Button>
      </CardFooter>
    </Card>
  )
}