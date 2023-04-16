"use client"

import layout from "@/styles/modules/layout.module.css";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className={layout.page}>
            <div>
                <h1>Error 404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button type="button" onClick={() => router.back()}>
                    Go Back
                </button>
            </div>
        </div>
    )
}