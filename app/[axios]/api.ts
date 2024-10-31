import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export interface User {
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

export const fetchUsers = async (): Promise<User[]> => {
    const response: AxiosResponse<User[]> = await axios.get(`${API_URL}/all`);
    return response.data;
};

export const createUser = async (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    const response: AxiosResponse<User> = await axios.post(API_URL, user);
    return response.data;
};

export const updateUser = async (id: string, user: User): Promise<User> => {
    const response: AxiosResponse<User> = await axios.patch(API_URL, user, {
        headers: { id },
    });
    return response.data;
};

export const deleteUser = async (id: string): Promise<void> => {
    await axios.delete(API_URL, {
        headers: { id },
    });
};
