'use server'

import { revalidatePath } from 'next/cache'

// This is a mock database. In a real application, you'd use a proper database.
let products = [
  { id: 1, name: 'Product 1', price: 19.99, image: "", description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 29.99, image: "", description: 'Description for Product 2' },
]

export async function getProducts() {
  return products
}

export async function addProduct(formData: FormData) {
  const name = formData.get('name') as string
  const price = parseFloat(formData.get('price') as string)
  const image = formData.get('image') as string
  const description = formData.get('description') as string

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    image,
    description,
  }

  products.push(newProduct)
  revalidatePath('/products')
  return { message: 'Product added successfully' }
}

export async function updateProduct(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  const name = formData.get('name') as string
  const price = parseFloat(formData.get('price') as string)
  const image = formData.get('image') as string
  const description = formData.get('description') as string

  const index = products.findIndex(p => p.id === id)
  if (index !== -1) {
    products[index] = { id, name, price, image, description }
    revalidatePath('/products')
    return { message: 'Product updated successfully' }
  }
  return { message: 'Product not found' }
}

export async function deleteProduct(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  products = products.filter(p => p.id !== id)
  revalidatePath('/products')
  return { message: 'Product deleted successfully' }
}