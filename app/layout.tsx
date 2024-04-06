import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cloud-9 | Event Platform",
  description: "Cloud 9 is a platform for event management.",
  icons: {
    icon: "/assets/icons/cloud-9.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/assets/images/logo.png",
        },
        variables: {
          colorPrimary: "#41C9E2",
        },
      }}
    >
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
