'use client'

import { useState } from 'react'
import { addSupplier, updateSupplier } from './actions' // Atualize a importação para usar as funções de fornecedor
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// Definindo o esquema para os fornecedores
const supplierSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  contact: z.string().min(1, "Contact is required"),
  address: z.string().min(1, "Address is required"),
})

type SupplierFormValues = z.infer<typeof supplierSchema>

type SupplierFormProps = {
  supplier?: SupplierFormValues;
  onCancel?: () => void;
}

export default function SupplierForm({ supplier, onCancel }: SupplierFormProps) {
  const [message, setMessage] = useState('')

  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierSchema),
    defaultValues: supplier || {
      name: "",
      contact: "",
      address: "",
    },
  })

  const onSubmit = async (data: SupplierFormValues) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString())
    })

    const result = supplier
      ? await updateSupplier(formData) // Usando a função de atualização de fornecedor
      : await addSupplier(formData) // Usando a função de adição de fornecedor
    setMessage(result.message)
    if (onCancel) onCancel()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button
              className="bg-red-500 hover:bg-red-600 text-white font-bold"
              type="button"
              variant="destructive"
              onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold">
            {supplier ? 'Update' : 'Add'} Supplier
          </Button>
        </div>
      </form>
    </Form>
  )
}