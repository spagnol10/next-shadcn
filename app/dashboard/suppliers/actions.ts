'use server'

import { revalidatePath } from 'next/cache'

// This is a mock database for suppliers. In a real application, you'd use a proper database.
let suppliers = [
  { id: 1, name: 'Supplier 1', contact: 'contact1@example.com', address: 'Address 1' },
  { id: 2, name: 'Supplier 2', contact: 'contact2@example.com', address: 'Address 2' },
]

export async function getSuppliers() {
  return suppliers
}

export async function addSupplier(formData: FormData) {
  const name = formData.get('name') as string
  const contact = formData.get('contact') as string
  const address = formData.get('address') as string

  const newSupplier = {
    id: suppliers.length + 1,
    name,
    contact,
    address,
  }

  suppliers.push(newSupplier)
  revalidatePath('/suppliers')
  return { message: 'Supplier added successfully' }
}

export async function updateSupplier(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  const name = formData.get('name') as string
  const contact = formData.get('contact') as string
  const address = formData.get('address') as string

  const index = suppliers.findIndex(s => s.id === id)
  if (index !== -1) {
    suppliers[index] = { id, name, contact, address }
    revalidatePath('/suppliers')
    return { message: 'Supplier updated successfully' }
  }
  return { message: 'Supplier not found' }
}

export async function deleteSupplier(formData: FormData) {
  const id = parseInt(formData.get('id') as string)

  // Check if the supplier has products associated (for demonstration, we can assume an empty array as products)
  const hasProducts = false; // Implement logic to check for associated products

  if (hasProducts) {
    return { message: 'Cannot delete supplier with associated products' };
  }

  suppliers = suppliers.filter(s => s.id !== id)
  revalidatePath('/suppliers')
  return { message: 'Supplier deleted successfully' }
}