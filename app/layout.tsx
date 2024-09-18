import "@/assets/styles/index.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout;
