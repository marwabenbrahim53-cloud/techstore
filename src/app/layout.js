import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "./globals.css"; // Tailwind 4 v4 3andha l directive @tailwind fih

export const metadata = {
  title: 'TechStore – High-Tech & Innovation', // [cite: 28]
  description: 'Découvrez les meilleurs produits technologiques au meilleur prix.', // [cite: 29]
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <NavBar />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}