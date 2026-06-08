# 🚀 Day 1: Setup, Routing, and Layouts

**Date:** May 13, 2026
**Commits:** `5912a93`, `c220a7d`, `1256528`, `2fd1a18`

## 🌟 What I Learned

Today was all about setting up the foundation of a Next.js application and understanding how it handles navigating between different pages.

### 1. The App Router Basics 📁
Next.js uses a file-based routing system. This means the folders and files you create in the `src/app` directory automatically become your website's URLs!
*   `page.tsx`: This file is required to make a folder accessible as a web page.
*   `layout.tsx`: This acts as a wrapper around your pages. It's perfect for things that should stay the same across multiple pages, like a navigation bar or footer.

### 2. Route Groups `(folder)` 🗂️
I created folders with parentheses like `(auth)` and `(dashboard)`. 
*   **What are they?** These are called Route Groups. They allow you to organize your files logically without changing the actual URL structure.
*   **Example:** `src/app/(auth)/login/page.tsx` simply becomes `yourwebsite.com/login` (the `(auth)` is ignored in the URL!).

### 3. Dynamic Routing `[id]` 🔗
Sometimes you need dynamic URLs for things like blog posts, where the ID changes (`/blog/1`, `/blog/2`).
*   By naming a folder with brackets, like `[id]`, Next.js knows that this part of the URL is a variable.
*   I used this to create pages for individual blogs and a dedicated edit page: `src/app/(dashboard)/blog/[id]/edit/page.tsx`.

## 🛠️ Code Highlight
```typescript
// Example of a layout component
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="auth-container">
      {/* Anything inside this layout (like the login or register page) will be rendered here */}
      {children}
    </div>
  );
}
```