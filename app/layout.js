import "./globals.css";
import { FloatingActions, Footer, Header } from "@/components/SiteChrome";

export const metadata = {
  title: "Sprintz Holdings Pte Ltd | Industrial Supply & Global Trade Solutions",
  description:
    "Sprintz Holdings Pte Ltd provides industrial sourcing, electrical supply, factory procurement, and structured commodity trade support from Singapore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
