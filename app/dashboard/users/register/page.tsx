"use client";

import { useState } from "react";
import { UserTable } from "@/components/userManagement/app-userTable";
import { Plus } from "lucide-react";
import { UserForm } from "@/components/userManagement/app-userForm";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  imageUrl: string;
}

const initialUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", imageUrl: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", imageUrl: "/placeholder.svg?height=40&width=40" },
];

export default function RegiterNewUser() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const addUser = (newUser: Omit<User, "id">) => {
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    setUsers([...users, { ...newUser, id: newId }]);
  };

  const updateUser = (updatedUser: User) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const editUser = (user: User) => {
    setCurrentUser(user);
    setIsEditing(true);
  };

  return (
    <div className="flex h-screen w-full ">
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        {isEditing ? (
          <UserForm
            onSubmit={(user) => {
              if (currentUser) {
                updateUser(user);
              } else {
                addUser(user);
              }
              setIsEditing(false);
              setCurrentUser(null);
            }}
            initialData={currentUser}
            onCancel={() => {
              setIsEditing(false);
              setCurrentUser(null);
            }}
          />
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add New User
          </Button>
        )}
        <UserTable
          users={users}
          onEdit={editUser}
          onDelete={deleteUser}
        />
      </div>
    </div>
  )
}
