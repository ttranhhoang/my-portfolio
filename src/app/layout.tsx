import "./globals.css";
import "@/scss/page.scss";

import { Poppins } from "next/font/google";

const popins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  );
}
