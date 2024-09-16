import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'
import {ModalProvider} from "@/components/providers/modal-provider";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sila developer',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey={"discord-theme"}
      >
      <ModalProvider/>
        <Navbar />
        {children}
          <Toaster />
        <Navigation />
      </ThemeProvider>
        </body>
    </html>
  )
}
