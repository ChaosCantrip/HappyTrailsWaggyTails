"use client";

import layout from "@/styles/modules/layout.module.css";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
    const router = useRouter();

    return (
        <div className={layout.page}>
            <div>
                <h1>Error {error.status}</h1>
                <p>{error.message}</p>
                <button type="button" onClick={router.back}>
                    Go Back
                </button>
            </div>
        </div>
    )
}