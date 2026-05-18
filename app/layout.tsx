import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arunprakash B | Analytics & BI Consulting Portfolio",
  description:
    "Business analytics, BI dashboards, and data engineering solutions that drive measurable growth.",
  metadataBase: new URL("https://ab-business-portfolio.vercel.app"),
  openGraph: {
    title: "Arunprakash B | Analytics & BI Consulting",
    description:
      "Transforming raw data into actionable insights through Python, SQL, BI, and modern analytics engineering.",
    url: "https://ab-business-portfolio.vercel.app",
    siteName: "Arunprakash B Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunprakash B | Analytics & BI Consulting",
    description:
      "Analytics consulting portfolio featuring BI dashboards, forecasting, and business impact case studies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
