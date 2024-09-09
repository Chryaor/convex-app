"use client";

import { ConvexProvider } from "convex/react";
import { ConvexReactClient } from "convex/browser";
import { ConvexProviderWithClerk} from "convex/react-clerk"
import {useAuth, ClerkProvider } from "@clerk/nextjs"
import React from "react";

const client = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
export function Providers({children}: {children:React.ReactNode}) {
    return (
        <ClerkProvider>
        <ConvexProviderWithClerk client={client} useAuth={useAuth}>{children}</ConvexProviderWithClerk>
        </ClerkProvider>
    )
}