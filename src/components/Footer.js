import Link from 'next/link';

export default function Footer() {
  return (
    // Réduction du padding (p-4 au lieu de p-8) et de la marge du haut (mt-4 au lieu de mt-10)
    <footer className="bg-gray-900 text-white p-4 text-center mt-4 text-sm">
      <div className="flex flex-col items-center gap-2">
        <p>TechStore © 2025</p>
        <Link href="/contact" className="text-blue-400 hover:text-blue-300">
          Contactez-nous
        </Link>
      </div>
    </footer>
  );
}