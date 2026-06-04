"use server"; // from frontend server
import { LoginFormData, RegisterFormData } from "@/app/example/react-hookform/_components/schema";
import { login, register } from "../../lib/api/auth";
import { setTokenCookie, setUserInfoCookie } from "../../lib/cookies";


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

export async function loginUser(data: LoginFormData) {
    try {
        const result = await login(data);
        // if we have to access users data then result.data.user 
        // if you confuse than see the output part of postman body part and see the structure.

        // how to send data to component
        if (result.success) {
            // TODO: cookies implementation
            const user = result.data?.user;
            const token = result.data?.token;
            await setUserInfoCookie(user);
            await setTokenCookie(token);

            return { success: true, data: result.data, message: result.message || "Login Successful" };
        }
        return { success: false, data: null, message: result.message || "Login Failed" };
    } catch (error: any) {
        return { success: false, data: null, message: error.message || "Login Failed" };
    }
};