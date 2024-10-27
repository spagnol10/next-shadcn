import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
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

        <Sibebar />
        {children}
      </body>
    </html>
  );
}
