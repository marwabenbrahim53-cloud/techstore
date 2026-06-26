import Header from '../components/Header'; // خلي هذا برك
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
          {/* فسخت الـ NavBar من هنا! */}
          <main>{children}</main> 
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}