import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { CartProvider } from "../context/CartContext"; 
import "./globals.css";

export const metadata = {
  title: 'TechStore – High-Tech & Innovation',
  description: 'Découvrez les meilleurs produits technologiques au meilleur prix.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <NavBar />
          <main>{children}</main> 
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}