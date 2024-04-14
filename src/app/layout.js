import { AppProvider } from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { EdgeStoreProvider } from "../libs/edgestore";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
    title: "PizzaHub",
    description: "The best pizza in town",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={roboto.className}>
                <main className="max-w-4xl mx-auto p-4">
                    <AppProvider>
                        <Toaster />
                        <Header />
                        <EdgeStoreProvider>{children}</EdgeStoreProvider>
                        <footer className="border-t p-8 text-center text-gray-500 mt-16">
                            &copy; 2023 All rights reserved
                        </footer>
                    </AppProvider>
                </main>
            </body>
        </html>
    );
}
