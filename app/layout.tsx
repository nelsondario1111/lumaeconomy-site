// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUMA Economy — A Living Economy of Light",
  description:
    "LUMA is a community-powered exchange system where people trade services, care, and creativity using a symbolic unit of time instead of money.",
  metadataBase: new URL("https://lumaeconomy.com"),
  openGraph: {
    title: "LUMA Economy — A Living Economy of Light",
    description:
      "LUMA is a community-powered exchange system where people trade services, care, and creativity using a symbolic unit of time instead of money.",
    url: "https://lumaeconomy.com",
    siteName: "LUMA Economy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMA Economy — A Living Economy of Light",
    description:
      "A living economy of light where people exchange services, care, and creativity with a symbolic unit of time instead of money.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
