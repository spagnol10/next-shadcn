import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function DashboardImageUpload() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-3xl">Dashboard Image Upload</CardTitle>
        <CardDescription>Upload an image for your dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="image-upload">Upload Image</Label>
          <Input id="image-upload" type="file" accept="image/*" required />
        </div>
        <Button className="w-full">Generate</Button>
      </CardContent>
    </Card>
  )
}
