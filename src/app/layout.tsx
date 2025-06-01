import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Pacifico, Quicksand } from "next/font/google"

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] })
const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agarwal Sweets",
  description: "Delecious sweets",
}
const bodyClass = `${quicksand.className} ${pacifico.className}`


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bodyClass}>
          {children}
      </body>
    </html>
  )
}

