"use client";

import { useEffect, useState } from "react";
import { UserTable } from "@/components/user/app-userTable";
import { Plus } from "lucide-react";
import { UserForm } from "@/components/user/app-userForm";
import { Button } from "@/components/ui/button";
import { fetchUsers, createUser, updateUser, deleteUser, User as UserType } from "../../../[axios]/api"; // Importando as funções

export default function RegisterNewUser() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);

    useEffect(() => {
        const loadUsers = async () => {
            const usersData = await fetchUsers();
            setUsers(usersData);
        };
        loadUsers();
    }, []);

    const addUser = async (newUser: Omit<UserType, "id" | "createdAt" | "updatedAt">) => {
        const createdUser = await createUser(newUser);
        setUsers([...users, createdUser]);
    };

    const updateUserData = async (updatedUser: UserType) => {
        const updated = await updateUser(updatedUser.id, updatedUser);
        setUsers(users.map(user => user.id === updated.id ? updated : user));
    };

    const deleteUserData = async (userId: string) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.id !== userId));
    };

    const editUser = (user: UserType) => {
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
                                updateUserData(user);
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
                    onDelete={deleteUserData}
                />
            </div>
        </div>
    );
}
