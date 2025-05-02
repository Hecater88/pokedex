"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-semibold text-gray-600">
        Page not found. Redirecting to Pueblo Paleta...
      </p>
    </div>
  );
}
