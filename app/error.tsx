"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center text-white">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Something went wrong!</h2>
            <p className="mb-4 text-xs font-mono bg-black/50 p-4 rounded text-left w-full overflow-auto max-w-sm border border-white/10">
                {error.message}
                {error.stack && (
                    <>
                        <br /><br />
                        {error.stack}
                    </>
                )}
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-primary rounded-full font-bold hover:bg-teal-600 transition-colors"
            >
                Try again
            </button>
        </div>
    );
}
