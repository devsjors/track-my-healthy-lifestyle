import type { Metadata } from "next";
import "./assets/styles/index.css";

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
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
