import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

interface User {
  id: string; 
  name: string;
  email: string;
  cpfCnpj: string; 
  gender: 'WOMAN' | 'MAN' | 'OTHER'; 
  password: string; 
  phoneNumber: string;
  imageUrl: string; 
  isActive: boolean;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
  role: string; 
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void; // Alterado para string
}

export function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Avatar>
                <AvatarImage src={user.imageUrl} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phoneNumber}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => onEdit(user)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="destructive" onClick={() => onDelete(user.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
