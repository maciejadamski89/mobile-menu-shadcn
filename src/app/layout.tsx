import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotestk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mobile Menu Snippets",
    description:
        "A showcase of versatile mobile menu snippets using the shadcn drawer component. Explore menus sliding out from different directions, each represented with a unique icon.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className={`${spaceGrotestk.className} min-h-full antialiased flex flex-col`}>{children}</body>
        </html>
    );
}
