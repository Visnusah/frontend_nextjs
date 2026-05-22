"use client";
import { useForm } from "react-hook-form";
export default function LoginForm() {
    const {
        register, // to implement in input
        handleSubmit, // to implement submission
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: "", // states default
            password: ""
        }
    });
    const onSubmit = (data: any) => {
        alert("Submitted data: " + data.email + ", " + data.password);
    }
    return (
        <div></div>
    );
}