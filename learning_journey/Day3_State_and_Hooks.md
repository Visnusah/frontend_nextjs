# ⚛️ Day 3: React State and Custom Hooks

**Date:** May 20, 2026
**Commits:** `f251400`, `ade5f46`, `36fa891`

## 🌟 What I Learned

Today was about making the UI interactive! I dove deep into React Client Components and how to manage state (data that changes over time).

### 1. The `"use client"` Directive 💻
By default, Next.js components are Server Components (they run on the server and have no interactivity). 
*   To use hooks like `useState` or listen to events like `onClick`, I learned to add `"use client"` to the very top of the file.

### 2. Managing State (`useState`, `useEffect`) 🧠
*   **`useState`:** Allows a component to remember things. I used it to track user input in an email field and manage a simple counter.
*   **`useEffect`:** Allows you to perform side effects, like fetching data or setting up a timer, when the component loads or when a specific state changes.

### 3. Custom Hooks 🪝
Instead of writing the same logic over and over, you can extract it! 
*   I created a custom hook called `useUserCount` (`user-count.ts`). 
*   **Why is this cool?** It keeps the component code clean and lets you reuse that specific logic anywhere in the app effortlessly.

## 🛠️ Code Highlight
```typescript
"use client";
import { useState } from 'react';

export default function EmailInput() {
  const [email, setEmail] = useState('');

  return (
    <input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter email"
    />
  );
}
```