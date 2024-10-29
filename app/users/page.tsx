import { getUsers } from './actions'
import UserList from './UserList'
import UserForm from './UserForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Add New User</CardDescription>
        </CardHeader>
        <CardContent>
          <UserForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
          <CardDescription>View and manage existing users</CardDescription>
        </CardHeader>
        <CardContent>
          <UserList users={users} />
        </CardContent>
      </Card>
    </div>
  )
}