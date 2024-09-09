"use client";

import { ConvexProvider } from "convex/react";
import { ConvexReactClient } from "convex/browser";
import React from "react";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
export function ConvexClientProvider({children}: {children:React.ReactNode}) {
    return (
        <ConvexProvider client={client}>{children}</ConvexProvider>
    )
}