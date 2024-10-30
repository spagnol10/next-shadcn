'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import * as z from "zod"
import { addUser, updateUser } from './actions'

const userSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  contact: z.string().min(1, "Contact is required"),
  address: z.string().min(1, "Address is required"),
  cpf_cnpj: z.string().min(1, "CPF/CNPJ is required"),
})

type UserFormValues = z.infer<typeof userSchema>

type UserFormProps = {
  user?: UserFormValues;
  onCancel?: () => void;
}

export default function UserForm({ user, onCancel }: UserFormProps) {
  const [message, setMessage] = useState('')

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: user || {
      name: "",
      contact: "",
      address: "",
      cpf_cnpj: "",
    },
  })

  const onSubmit = async (data: UserFormValues) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString())
    })

    const result = user
      ? await updateUser(formData)
      : await addUser(formData)
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
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpf_cnpj"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF/CNPJ</FormLabel>
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
            {user ? 'Update' : 'Add'} User
          </Button>
        </div>
      </form>
    </Form>
  )
}