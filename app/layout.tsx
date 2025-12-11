import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import type React from "react";
import "./globals.css";

const _playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    description:
        "Pure honey, fair prices, strong farmer partnerships. Buy premium honey across Kenya.",

    title: "Golden Honey - Premium Honey Supply",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`font-sans antialiased ${_playfair.variable} ${montserrat.variable}`}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
