import Link from "next/link";

export default function LnkPage() {
    return (
        <div>
            {/* Use <a> for linking to external websites or when you specifically want to force a full page refresh (e.g., to clear a complex application state --> avoid this this ).  */}
            <a href="/example/image">Go to Image Page</a>

            {/* Use <Link> for all internal navigation within your application to take advantage of Next.js's performance optimizations like prefetching and code splitting. */}
            <Link href="/example/image">Go to Image Page with page</Link>
        </div>
    );
}