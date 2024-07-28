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
      <body className="dark"> {/* Add padding-top to account for fixed header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background"> {/* Add fixed positioning */}
          <NavigationMenuDemo/>
        </header>
        {children}
      </body>
    </html>
  );
}
