"use server"; // from frontend server
import { RegisterFormData } from "@/app/example/react-hookform/_components/schema";
import { register } from "../../lib/api/auth";

export async function registerUser(data: RegisterFormData) {
    try {
        const result = await register(data);
        // how to send data to component
        if (result.success) {
            return { success: true, data: result.data, message: result.message || "Registration Successful" };
        }
        return { success: false, data: null, message: result.message || "Registration Failed" };
    } catch (error: any) {
        return { success: false, data: null, message: error.message || "Registration Failed" };
    }
};