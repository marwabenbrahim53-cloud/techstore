import Link from 'next/link'; // 1. Ne pas oublier cet import !

export default function ProduitCard({ produit }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg flex flex-col">
      <img src={produit.image} alt={produit.nom} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-2 flex-grow">
        <h2 className="font-bold mt-2">{produit.nom}</h2>
        <p className="text-sm text-gray-500">{produit.categorie}</p>
        <p className="font-bold text-blue-600 mt-2">{produit.prix} DT</p>
      </div>
      
      {/* 2. Ajout du bouton ici */}
      <Link 
        href={`/produits/${produit.id}`} 
        className="block mt-4 bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 transition"
      >
        Voir détails
      </Link>
    </div>
  );
}