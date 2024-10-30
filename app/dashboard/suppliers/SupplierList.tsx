// SupplierList.tsx
'use client'

import { useState } from 'react'
import { deleteSupplier } from './actions'
import SupplierForm from './SupplierForm'
import { Button } from '@/components/ui/button'

interface Supplier {
  id: number
  name: string
  contact: string
  address: string
}

interface SupplierListProps {
  suppliers: Supplier[]
}

export default function SupplierList({ suppliers }: SupplierListProps) {
  const [editingSupplier, setEditingSupplier] = useState<number | null>(null)

  const handleDelete = async (id: number) => {
    const formData = new FormData()
    formData.append('id', id.toString())
    await deleteSupplier(formData)
  }

  return (
    <div className="space-y-4">
      {suppliers.map((supplier) => (
        <div key={supplier.id} className="border p-4 rounded-lg">
          {editingSupplier === supplier.id ? (
            <SupplierForm supplier={supplier} onCancel={() => setEditingSupplier(null)} />
          ) : (
            <>
              <h3 className="font-semibold">{supplier.name}</h3>
              <p className="text-sm">Contact: {supplier.contact}</p>
              <p className="text-sm">Address: {supplier.address}</p>
              <div className="mt-4 space-x-2 flex flex-1 justify-end items-end">
                <Button
                  onClick={() => setEditingSupplier(supplier.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(supplier.id)}
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