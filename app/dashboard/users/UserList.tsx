'use client'

import { useState } from 'react'
import { deleteUser } from './actions'
import UserForm from './UserForm'
import { Button } from '@/components/ui/button'

interface User {
  id: number
  name: string
  contact: string
  address: string
  cpf_cnpj: string
}

interface UserListProps {
  users: User[]
}

export default function UserList({ users }: UserListProps) {
  const [editingUser, setEditingUser] = useState<number | null>(null)

  const handleDelete = async (id: number) => {
    const formData = new FormData()
    formData.append('id', id.toString())
    await deleteUser(formData)
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded-lg">
          {editingUser === user.id ? (
            <UserForm user={user} onCancel={() => setEditingUser(null)} />
          ) : (
            <>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm">Contact: {user.contact}</p>
              <p className="text-sm">Address: {user.address}</p>
              <p className="text-sm">CPF/CNPJ: {user.cpf_cnpj}</p>
              <div className="mt-4 space-x-2 flex flex-1 justify-end items-end">
                <Button
                  onClick={() => setEditingUser(user.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(user.id)}
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