import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "./context/ShopContext";
import { AuthProvider } from "./context/AuthContext";
import { CountryProvider } from "./context/CountryContext";
import ClientWrapper from "@/components/home/ClientWrapper";
import { Suspense } from "react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200"], // Multiple weights for better flexibility
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300"], // Multiple weights for better flexibility
});

export const metadata = {
  title: "Home Of Fragrances - Best Fragrance Shop In the Web",
  description: "Best Fragrance Shop In the Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${poppins.variable} ${outfit.className} antialiased font-outfit`}
      >
        <ShopProvider>
          <AuthProvider>
            <CountryProvider>
              <Suspense fallback={null}>
                <ClientWrapper>{children}</ClientWrapper>
              </Suspense>
            </CountryProvider>
          </AuthProvider>
        </ShopProvider>
      </body>
    </html>
  );
}
