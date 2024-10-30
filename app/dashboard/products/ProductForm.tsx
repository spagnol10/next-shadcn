'use client'

import { useState } from 'react'
import { addProduct, updateProduct } from './actions'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const productSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  price: z.number().min(0.01, "Price must be greater than 0"),
  image: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
})

type ProductFormValues = z.infer<typeof productSchema>

type ProductFormProps = {
  product?: ProductFormValues;
  onCancel?: () => void;
}

export default function ProductForm({ product, onCancel }: ProductFormProps) {
  const [message, setMessage] = useState('')

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: product || {
      name: "",
      price: 0,
      image: "",
      description: "",
    },
  })

  const onSubmit = async (data: ProductFormValues) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString())
    })

    const result = product
      ? await updateProduct(formData)
      : await addProduct(formData)
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
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" {...field} onChange={e => field.onChange(parseFloat(e.target.value))} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
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
            {product ? 'Update' : 'Add'} Product
          </Button>
        </div>
      </form>
    </Form>
  )
}