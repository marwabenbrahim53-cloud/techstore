import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      {/* Bannière High-Tech */}
      <div className="mb-10 w-full max-w-4xl h-64 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
        <img 
          src="/banner1.jpg" 
          alt="Bannière High-Tech" 
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">Bienvenue chez TechStore</h1>
      <p className="text-lg text-gray-600 mb-8">Découvrez les dernières innovations technologiques.</p>

      {/* Boutons */}
      <div className="flex gap-4">
        <Link 
          href="/produits" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Produits
        </Link>
        <Link 
          href="/inscription" 
          className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          S'inscrire
        </Link>
      </div>
    </div>
  );
}