"use client";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            firstName: "",
            lastName: "",
            email: "admin@gmail.com",
            password: "",
            confirmPassword: ""
        }
    });
    const onSubmit = (data: RegisterFormData) => {
        if (data.email === "admin@gmail.com" && data.password === "admin123") {
            router.push("/example/react-hookform/login-with-zod");
        } else {
            alert("invalid credentials");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        {...register("username")} 
                    />
                    { errors.username && <span>{errors.username.message}</span> }
                </div>
                <div>
                    <label>First Name: </label>
                    <input 
                        type="text" 
                        {...register("firstName")} 
                    />
                    { errors.firstName && <span>{errors.firstName.message}</span> }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                        type="text" 
                        {...register("lastName")} 
                    />
                    { errors.lastName && <span>{errors.lastName.message}</span> }
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        {...register("email")} 
                    />
                    { errors.email && <span>{errors.email.message}</span> }
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        {...register("password")} 
                    />
                    { errors.password && <span>{errors.password.message}</span> }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input 
                        type="password" 
                        {...register("confirmPassword")} 
                    />
                    { errors.confirmPassword && <span>{errors.confirmPassword.message}</span> }
                </div>
                <button type="submit" disabled={isSubmitting}>Register</button>
            </form>
        </div>
    );
}