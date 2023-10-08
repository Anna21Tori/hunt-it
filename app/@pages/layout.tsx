'use client'
import { useUser } from "@auth0/nextjs-auth0/client";

export default function RootLayout({  
  anyone, employer
}: {
  children: React.ReactNode,
  anyone: React.ReactNode,
  employer: React.ReactNode
}) {
    const { user } = useUser();
  return (
    <>
        {user ? employer : anyone}
    </>
  )
}