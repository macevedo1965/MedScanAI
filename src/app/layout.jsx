import "@/styles/globals.css";
import { nunito } from "@/styles/fonts";
import Providers from "./Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MedScanAI",
  description: "La siguiente generación de la medicina con AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${nunito.className} antialiased w-full grid grid-flow-col grid-rows-[4rem_1fr_4rem]`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
