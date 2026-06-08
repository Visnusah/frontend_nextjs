# 🖼️ Day 2: Navigation, Images, and Redirects

**Date:** May 18, 2026
**Commits:** `f4e4a10`, `ff9e777`, `bdf6571`, `3d8b1cc`, `da721eb`

## 🌟 What I Learned

After getting the pages set up, I focused on making the application feel like a real website by adding images, linking pages together, and handling redirects.

### 1. Optimized Images `<Image />` 📸
Instead of the standard HTML `<img>` tag, Next.js provides a powerful `<Image />` component (`next/image`).
*   **Why use it?** It automatically optimizes images for different screen sizes, prevents layout shifts (when the page jumps as images load), and lazy-loads them to make the site significantly faster.

### 2. Client-Side Navigation 🧭
To move between pages without reloading the whole browser tab (like a single-page application), I learned to use:
*   **`<Link>` Component:** The standard way to create clickable links (`next/link`). It pre-fetches pages in the background!
*   **`useRouter()`:** A hook (`next/navigation`) that lets you navigate programmatically. For example, redirecting a user *after* they click a button or finish an action.

### 3. Server-Side Redirects 🔄
Sometimes you need to kick someone to a different page before the page even loads (like if they try to access a dashboard but aren't logged in).
*   I learned how to use the `redirect()` function from Next.js on the server side.
*   I also integrated this with **Server Actions** (`actions.ts`), allowing form submissions to seamlessly trigger a redirect directly from the backend.

## 🛠️ Code Highlight
```typescript
import { redirect } from 'next/navigation';

export async function submitForm(formData: FormData) {
  // Do some server-side magic...
  // Then redirect the user to a success page!
  redirect('/example/redirect-server/success');
}
```