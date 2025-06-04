import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XMA Agency Client Survey - Help Us Serve You Better",
  description: "Complete our comprehensive client survey and receive a FREE marketing audit worth $500. Help XMA Agency understand your business journey and goals to deliver exceptional results.",
  keywords: ["XMA Agency", "client survey", "marketing audit", "business feedback", "Dubai marketing", "UAE marketing agency"],
  authors: [{ name: "XMA Agency" }],
  creator: "XMA Agency",
  publisher: "XMA Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://survey.xma-agency.com"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "XMA Agency Client Survey - Free $500 Marketing Audit",
    description: "Share your business journey with XMA Agency and receive a complimentary marketing audit worth $500. Your feedback helps us deliver exceptional results.",
    url: "https://survey.xma-agency.com", // Update with your actual domain
    siteName: "XMA Agency Survey",
    images: [
      {
        url: "/og-image.jpg", // You can add this image later
        width: 1200,
        height: 630,
        alt: "XMA Agency Client Survey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XMA Agency Client Survey - Free $500 Marketing Audit",
    description: "Complete our survey and get a FREE marketing audit worth $500. Help us serve you better!",
    images: ["/og-image.jpg"], // You can add this image later
    creator: "@XMAAgency", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
