"use client";
import { useForm } from "react-hook-form";
import { required } from "zod/v4-mini";
export default function LoginForm() {
  const {
    register, // to implement in input
    handleSubmit, // to implement submission
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "", // states default
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    alert("Submitted data: " + data.email + ", " + data.password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            className="border"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>(errors.email.message)</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            className="border"
            type="password"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && <span>(errors.password.message)</span>}
        </div>
        <button className="border" type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
    </div>
  );
}
