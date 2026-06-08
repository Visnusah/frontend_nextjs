# 🌍 Day 6: Global State with React Context API

**Date:** June 5, 2026 (Today)
**Commits:** `8db6bec`

## 🌟 What I Learned

Today, I tackled the problem of sharing data across many different components without having to pass "props" down through every single level (a problem known as "prop drilling").

### 1. The React Context API 🤝
I created an `AuthContext.tsx` to manage the user's authentication state globally.
*   **What is it?** Context provides a way to share values (like "is the user logged in?" or "what is the user's name?") between components without having to explicitly pass a prop through every level of the tree.

### 2. Setting up the Provider 🏠
*   I built an `AuthProvider` component. This component "wraps" around the parts of the app that need to know about the user's login status.
*   I integrated this provider into the main `layout.tsx`. Because the layout wraps around *all* pages, the entire application can now instantly know if a user is logged in or not!

### 3. Using the Context 🕵️
*   Inside components like the Dashboard, I can now use a custom hook (like `useAuth()`) to instantly grab the user's details directly from the Context, making the code much cleaner and easier to maintain.

## 🛠️ Code Highlight
```typescript
// lib/context/AuthContext.tsx (Concept)
"use client";
import { createContext, useContext, useState } from 'react';

// 1. Create the context
const AuthContext = createContext<any>(null);

// 2. Create the Provider wrapper
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null); // Global user state

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Easy way to use it in any component!
export const useAuth = () => useContext(AuthContext);
```