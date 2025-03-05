import type { Metadata } from "next";
import "./globals.css";

import AppSidebar from "@/ui/App/Sidebar";
import AppHeader from "@/ui/App/Header";
import AppMain from "@/ui/App/Main";

export const metadata: Metadata = {
  title: "shane-admin",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <AppSidebar />
          <div className="flex-auto flex flex-col">
            <AppHeader />
            <AppMain>{children}</AppMain>
          </div>
        </div>
      </body>
    </html>
  );
}
