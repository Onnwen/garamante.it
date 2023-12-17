import { Montserrat } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const montserrat = Montserrat({
    variation: "--font-montserrat",
    subsets: ["latin-ext"],
})
export const newYorkFont = localFont({
    src: "/NewYork.otf",
    variable: "--font-newyork",
    subsets: ["latin-ext"],
})

const metadata = {
    title: "garamante.it",
    description: "Sviluppatore iOS & web",
}

export default function RootLayout({ children }) {
    return (
        <html lang="it">
            <body className={`${montserrat.className} text-white`}>{children}</body>
        </html>
    )
}
