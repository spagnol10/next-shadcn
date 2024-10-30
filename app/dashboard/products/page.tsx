import { getProducts } from './actions'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
          <CardDescription>Add New Product</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductForm />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>View and manage existing products</CardDescription>
        </CardHeader>
        <CardContent>
          <ProductList products={products} />
        </CardContent>
      </Card>
    </div>
  )
}