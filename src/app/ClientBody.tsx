"use client";

import { useEffect } from "react";

export function ClientBody({ children }: { children: React.ReactNode }) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    // Any client-side initialization can go here
  }, []);

  return <>{children}</>;
}
