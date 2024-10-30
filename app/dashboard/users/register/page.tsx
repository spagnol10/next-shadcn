import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import UserForm from '../UserForm'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default async function UsersPage() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Add New User</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
          <Label htmlFor="image" className="cursor-pointer" />
          <Input 
                  id="image" 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                />
                <span className="text-sm text-blue-500 hover:underline">Change profile picture</span>
          </div>
          <UserForm />
        </CardContent>
      </Card>
    </div>
  )
}