import * as React from "react"
import { Metadata } from "next"

/* Theme & Fonts */
import { ThemeProvider } from "next-themes"
import { Geist, Geist_Mono } from "next/font/google"

const fontSans = Geist({
    subsets: [ "latin" ],
    variable: "--font-sans"
})

const fontMono = Geist_Mono({
    subsets: [ "latin" ],
    variable: "--font-mono"
})

/* Stylesheet */
import "@/styles/globals.css"

/* Layout */
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={ `${fontSans.variable} ${fontMono.variable} font-sans antialiased ` }>
                <ThemeProvider attribute="class" forcedTheme="dark" disableTransitionOnChange>
                    { children }
                </ThemeProvider>
            </body>
        </html>
    )
}

/* Metadata */
export const metadata: Metadata = {
    title: 'eversi.de solutions',
    description: 'We are a team of developers which create personalized experiences for our customers.',
    icons: {
        icon: '/img/logo.svg'
    }
}
