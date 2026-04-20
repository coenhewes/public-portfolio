import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NavigationMenuDemo } from "./_components/topnav"

export const metadata: Metadata = {
  title: "Coen Hewes",
  description: "Portfolio of Coen Hewes",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark">
        <header className="fixed left-0 right-0 top-0 z-50 flex justify-center border-b border-border/40 bg-background/80 backdrop-blur">
          <NavigationMenuDemo />
        </header>
        {children}
      </body>
    </html>
  );
}
