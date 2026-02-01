import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import type React from "react";
import "./global.css";

import WhatsappChat from "@/components/whatsapp-chat";

const _playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    alternates: {
        canonical: "https://golden-honey.exhby.com/",
    },
    description:
        "Pure honey, fair prices, strong farmer partnerships. Buy premium honey across Kenya. Direct from beekeepers, tested for quality.",
    icons: {
        apple: [
            {
                sizes: "180x180",
                type: "image/png",
                url: "/apple-touch-icon.png",
            },
        ],
        icon: [
            { sizes: "any", url: "/favicon.ico" },
            { sizes: "16x16", type: "image/png", url: "/favicon-16x16.png" },
            { sizes: "32x32", type: "image/png", url: "/favicon-32x32.png" },
        ],
    },
    keywords: [
        "honey Kenya",
        "premium honey",
        "raw honey",
        "buy honey online",
        "beekeeping",
    ],

    manifest: "/site.webmanifest",
    metadataBase: new URL("https://golden-honey.exhby.com/"),

    openGraph: {
        description:
            "Pure honey directly from Kenyan beekeepers. Fair prices, quality guaranteed.",
        images: [
            {
                alt: "Golden Honey - Premium Honey",
                height: 630,
                url: "https://golden-honey.exhby.com/og-image.jpg",
                width: 1200,
            },
        ],
        siteName: "Golden Honey",
        title: "Golden Honey - Premium Honey Supply",
        type: "website",
        url: "https://goldenhoney.com",
    },
    publisher: "Golden Honey",
    robots: "index, follow",
    title: "Golden Honey - Premium Honey Supply Across Kenya | Buy Online",
    twitter: {
        card: "summary_large_image",
        description: "Pure honey directly from Kenyan beekeepers.",
        images: ["https://golden-honey.exhby.com/og-image.jpg"],
        title: "Golden Honey - Premium Honey Supply",
    },
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
                <WhatsappChat />
            </body>
        </html>
    );
}
