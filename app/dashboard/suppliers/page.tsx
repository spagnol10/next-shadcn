// SuppliersPage.tsx
import { getSuppliers } from './actions'
import SupplierList from './SupplierList'
import SupplierForm from './SupplierForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default async function SuppliersPage() {
  const suppliers = await getSuppliers()

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Supplier Management</CardTitle>
          <CardDescription>Add New Supplier</CardDescription>
        </CardHeader>
        <CardContent>
          <SupplierForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supplier List</CardTitle>
          <CardDescription>View and manage existing suppliers</CardDescription>
        </CardHeader>
        <CardContent>
          <SupplierList suppliers={suppliers} />
        </CardContent>
      </Card>
    </div>
  )
}