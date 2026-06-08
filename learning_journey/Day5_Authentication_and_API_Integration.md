# 🔐 Day 5: Authentication, API Integration, and Cookies

**Dates:** June 3 - June 4, 2026
**Commits:** `12b47d0`, `2165b72`, `d290943`, `314d160`, `5f61bc9`

## 🌟 What I Learned

Over these two days, I focused on connecting the frontend to a backend! I built out the real logic for user registration and login.

### 1. Centralized API Requests with Axios 🌐
Instead of using standard `fetch` every time, I set up **Axios** (`axios-instance.ts`).
*   **Why?** Axios makes it easier to set base URLs (so I don't have to type the full API address every time) and handle request headers automatically. I also created an `endpoints.ts` file to keep all API paths in one organized place.

### 2. Server Actions for Authentication 🛡️
I used Next.js **Server Actions** (`auth-action.ts`) to handle form submissions securely on the server.
*   When a user submits the login form, the data goes to a Server Action. This action then talks to the external API using my Axios setup. This keeps sensitive logic and direct API communication off the client-side browser.

### 3. Managing Sessions with Cookies 🍪
Once the API confirms a user's login is correct, it sends back an authentication token.
*   I learned how to store this token securely using Next.js `cookies()` (`lib/cookies.ts`). 
*   Storing the token in a cookie means the browser will remember the user is logged in, even if they refresh the page or close the tab!
*   After a successful login and cookie setting, I implemented a smooth redirect to the newly created `/dashboard` page.

## 🛠️ Code Highlight
```typescript
// lib/cookies.ts (Example concept)
import { cookies } from 'next/headers';

export async function setAuthToken(token: string) {
  // Store the token securely on the server side
  cookies().set('auth_token', token, {
    httpOnly: true, // Prevents JavaScript access for security
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}
```