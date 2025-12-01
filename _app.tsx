import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../lib/AuthContext";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      <UserProvider>
        <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white">
          <Head>
            <title>Your-Tube Clone</title>
          </Head>

          <Header />
          <Toaster />
          <div className="flex">
            <Sidebar />
            <main className="flex-1">
              <Component {...pageProps} />
            </main>
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
