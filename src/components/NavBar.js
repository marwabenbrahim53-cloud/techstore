import Link from 'next/link';
import Image from 'next/image'; // Importez le composant Image

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      
      {/* Affichage du Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image 
          src="/logo.jpg" // Chemin vers votre image dans public/
          alt="Logo TechStore" 
          width={40}  // Ajustez la taille
          height={40} // Ajustez la taille
          className="rounded-full" // Optionnel: pour un logo arrondi
        />
        <span className="text-xl font-bold">TechStore</span>
      </Link>

      {/* Menu de navigation */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-400 transition">Accueil</Link>
        <Link href="/produits" className="hover:text-blue-400 transition">Produits</Link>
        <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        <Link href="/inscription" className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Inscription
        </Link>
      </div>
    </nav>
  );
}