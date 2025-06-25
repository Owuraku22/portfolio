import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/topNav";
import { Icons } from "@/lib/icons";
import Footer from "@/components/footer";
import Layout from "@/components/layout";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Owura Kwaku Safo",
  description: "Checkout my portfolio website to see my projects and skills.",
  icons: {
    icon: "https://res.cloudinary.com/dfdz4coc9/image/upload/v1745172892/favicon.jpg",
    shortcut: "https://res.cloudinary.com/dfdz4coc9/image/upload/v1745172892/favicon.jpg",
    apple: "https://res.cloudinary.com/dfdz4coc9/image/upload/v1745172892/favicon.jpg",
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
        className={`bg-[#282C33]   font-fira-code ${firaCode.variable}   antialiased`}
      >
        <Layout children={children} />
      </body>
    </html>
  );
}
