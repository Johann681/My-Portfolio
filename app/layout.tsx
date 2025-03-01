import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";



export const metadata: Metadata = {
  title: "Adekola's Portfolio",
  description:
    "A masterpiece of a portfolio which I dedicate to myself and love for coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" bg-black ">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
