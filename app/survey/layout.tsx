import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Survey - XMA Agency | Share Your Experience",
  description: "Complete the XMA Agency client survey to share your business journey and receive a FREE marketing audit worth $500. Help us understand your goals and challenges.",
  openGraph: {
    title: "Client Survey - Share Your XMA Agency Experience",
    description: "Tell us about your business transformation with XMA Agency and get a FREE $500 marketing audit.",
  },
  twitter: {
    title: "XMA Agency Client Survey - Free Marketing Audit",
    description: "Share your experience and get a FREE $500 marketing audit!",
  },
};

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}