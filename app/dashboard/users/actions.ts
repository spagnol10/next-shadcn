'use server'

import { revalidatePath } from 'next/cache'

// This is a mock database. In a real application, you'd use a proper database.
let users = [
  { id: 1, name: 'User 1', contact: '123456789', address: 'Address 1', cpf_cnpj: '123.456.789-00' },
  { id: 2, name: 'User 2', contact: '987654321', address: 'Address 2', cpf_cnpj: '00.987.654/0001-00' },
]

export async function getUsers() {
  return users
}

export async function addUser(formData: FormData) {
  const name = formData.get('name') as string
  const contact = formData.get('contact') as string
  const address = formData.get('address') as string
  const cpf_cnpj = formData.get('cpf_cnpj') as string

  const newUser = {
    id: users.length + 1,
    name,
    contact,
    address,
    cpf_cnpj,
  }

  users.push(newUser)
  revalidatePath('/users')
  return { message: 'User added successfully' }
}

export async function updateUser(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  const name = formData.get('name') as string
  const contact = formData.get('contact') as string
  const address = formData.get('address') as string
  const cpf_cnpj = formData.get('cpf_cnpj') as string

  const index = users.findIndex(u => u.id === id)
  if (index !== -1) {
    users[index] = { id, name, contact, address, cpf_cnpj }
    revalidatePath('/users')
    return { message: 'User updated successfully' }
  }
  return { message: 'User not found' }
}

export async function deleteUser(formData: FormData) {
  const id = parseInt(formData.get('id') as string)
  users = users.filter(u => u.id !== id)
  revalidatePath('/users')
  return { message: 'User deleted successfully' }
}

export async function getUserHistory(userId: number) {
  // Mocking user order history. Replace this with actual logic to fetch order history.
  const orderHistory = [
    { userId: 1, orderId: 1, status: 'Completed', date: '2023-01-01' },
    { userId: 1, orderId: 2, status: 'Pending', date: '2023-02-01' },
    { userId: 2, orderId: 3, status: 'Cancelled', date: '2023-03-01' },
  ]
  return orderHistory.filter(order => order.userId === userId)
}