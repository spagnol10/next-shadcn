import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  id: string; // Alterado para string
  name: string;
  email: string;
  role: string;
  imageUrl: string;
  cpfCnpj: string;
  gender: "WOMAN" | "MAN" | "OTHER"; // Adicionado
  password: string; // Adicionado
  phoneNumber: string; // Adicionado
  isActive: boolean; // Adicionado
  dateOfBirth: string; // Adicionado
  createdAt: string; // Adicionado
  updatedAt: string; // Adicionado
}

interface UserFormProps {
  onSubmit: (user: User) => void;
  initialData?: Partial<User> | null; // Allow null
  onCancel: () => void;
}

export function UserForm({ onSubmit, initialData = {}, onCancel }: UserFormProps) {
  const [user, setUser] = useState<User>({
    id: "0",
    name: "",
    email: "",
    cpfCnpj: "",
    gender: "WOMAN", // Valor padrão
    password: "",
    phoneNumber: "",
    imageUrl: "/placeholder.svg?height=128&width=128",
    isActive: true,
    dateOfBirth: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: "User",
    ...initialData,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{initialData?.id ? "Edit User" : "Add New User"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.imageUrl} alt={user.name} />
              <AvatarFallback>{user.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div>
              <Label htmlFor="image" className="cursor-pointer">
                <Input
                  id="image"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                <span className="text-sm text-blue-500 hover:underline">Change profile picture</span>
              </Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cpfCnpj">CPF/CNPJ</Label>
            <Input
              id="cpfCnpj"
              value={user.cpfCnpj}
              onChange={(e) => setUser({ ...user, cpfCnpj: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select value={user.gender} onValueChange={(value) => setUser({ ...user, gender: value as 'WOMAN' | 'MAN' | 'OTHER' })}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WOMAN">Woman</SelectItem>
                <SelectItem value="MAN">Man</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={user.phoneNumber}
              onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={user.role} onValueChange={(value) => setUser({ ...user, role: value })}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
          <Button type="submit">{initialData?.id ? "Update" : "Add"} User</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
