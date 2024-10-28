import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sibebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider> */}
        {/* <Header /> */}
        <Sibebar />
        {children}
      </body>
    </html>
  );
}
