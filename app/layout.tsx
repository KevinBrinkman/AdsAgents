import "./globals.css";
import { ReactNode } from "react";
import { NextAuthProvider } from "@/components/NextAuthProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
