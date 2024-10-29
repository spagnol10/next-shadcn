'use client'

import { useState } from 'react'
import { deleteProduct } from './actions'
import ProductForm from './ProductForm'
import { Button } from '@/components/ui/button'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  const [editingProduct, setEditingProduct] = useState<number | null>(null)

  const handleDelete = async (id: number) => {
    const formData = new FormData()
    formData.append('id', id.toString())
    await deleteProduct(formData)
  }

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg">
          {editingProduct === product.id ? (
            <ProductForm product={product} onCancel={() => setEditingProduct(null)} />
          ) : (
            <>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm">${product.price.toFixed(2)}</p>
              <p className="text-sm">{product.description}</p>
              <div className="mt-4 space-x-2 flex flex-1 justify-end items-end">
                <Button
                  onClick={() => setEditingProduct(product.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold"
                >
                  Delete
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}