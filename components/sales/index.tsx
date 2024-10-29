import { CircleDollarSignIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader >
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl">
            Last clients
          </CardTitle>
          <CircleDollarSignIcon className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>
          New clients last 24 hours
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/spagnol10.png" />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Developer</p>
            <span className="text-[12px] sm:text-sm">Developer@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/spagnol10.png" />
            <AvatarFallback>WS</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Developer</p>
            <span className="text-[12px] sm:text-sm">Developer@gmail.com</span>
          </div>
        </article>
      </CardContent>

    </Card>
  )
}