# 📝 Day 4: Forms and Validation with Zod

**Date:** May 22, 2026
**Commits:** `9ce9946`, `5e98928`, `a78be3e`, `2585c5f`, `30f517c`

## 🌟 What I Learned

Forms can be tricky in React. Today, I leveled up my form handling by introducing two incredibly popular libraries: **React Hook Form** and **Zod**.

### 1. React Hook Form ⚡
Managing a form with 10 fields using `useState` for each one gets messy quickly.
*   `react-hook-form` is a library that handles form state automatically. It's faster because it doesn't re-render the whole component every time you type a single letter.
*   I built `LoginForm` and `RegisterForm` components using this approach.

### 2. Schema Validation with Zod 🛡️
You can't trust what users type into a form. They might enter a password that's too short or an invalid email.
*   **Zod** allows you to create a "schema" (a blueprint) of what the data *should* look like.
*   I connected Zod directly to React Hook Form. Now, if a user types something invalid, the form instantly knows and can show a helpful error message without writing complex `if/else` statements manually!

## 🛠️ Code Highlight
```typescript
import { z } from 'zod';

// 1. Define the rules
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Zod handles the validation automatically when the user clicks submit!
```