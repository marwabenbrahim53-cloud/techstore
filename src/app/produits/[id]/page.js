import { produits } from "../../../data/produits";

export default async function DetailProduit({ params }) {
  // Récupération de l'id depuis les paramètres de l'URL
  const { id } = await params;
  
  // Recherche du produit correspondant
  const produit = produits.find((p) => p.id.toString() === id.toString());

  if (!produit) {
    return (
      <div className="text-center mt-20 text-xl font-bold">
        Produit non trouvé !
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image du produit */}
        <div className="w-full">
          <img 
            src={produit.image} 
            alt={produit.nom} 
            className="w-full h-auto rounded-2xl shadow-lg" 
          />
        </div>
        
        {/* Détails du produit */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{produit.nom}</h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {produit.description}
          </p>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            {produit.prix} DT
          </p>
          
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}