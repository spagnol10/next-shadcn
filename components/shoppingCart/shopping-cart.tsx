'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [newItemName, setNewItemName] = useState('')
  const [newItemPrice, setNewItemPrice] = useState('')

  const addItem = () => {
    if (newItemName && newItemPrice) {
      const newItem: CartItem = {
        id: Date.now(),
        name: newItemName,
        price: parseFloat(newItemPrice),
        quantity: 1,
      }
      setCartItems([...cartItems, newItem])
      setNewItemName('')
      setNewItemPrice('')
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Item name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Price"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
              />
              <Button onClick={addItem}>Add Item</Button>
            </div>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-2">
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <div className="flex items-center space-x-2">
                  <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, -1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg">${total.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}