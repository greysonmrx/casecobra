import React from "react";
import { Recursive } from "next/font/google";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/Toaster";
import { Providers } from "./components/Providers";

import "@/styles/globals.css";
import "@/styles/responsive.css";

const recursive = Recursive({ subsets: ["latin"] });

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
};

export { DefaultLayout };
