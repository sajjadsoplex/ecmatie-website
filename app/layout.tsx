import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ECMatie: Your Education and Career Mate",
    template: "%s | ECMatie",
  },

  description:
    "ECMatie is your education and career mate — helping students plan their studies, build skills, explore career paths, track progress, and connect with other students.",

  applicationName: "ECMatie",

  metadataBase: new URL("https://ecmatie.com"),

  authors: [
    {
      name: "ECMatie",
    },
  ],

  creator: "ECMatie",

  publisher: "ECMatie",

  openGraph: {
    title: "ECMatie: Your Education and Career Mate",
    description:
      "Plan your studies, build your skills, explore your career path, and grow with ECMatie.",
    url: "https://ecmatie.com",
    siteName: "ECMatie",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ECMatie: Your Education and Career Mate",
    description:
      "Plan your studies, build your skills, explore your career path, and grow with ECMatie.",
  },

  icons: {
    icon: "/brand/favicon.png",
    shortcut: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#071b3a",
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