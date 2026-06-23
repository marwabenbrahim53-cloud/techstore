// Assurez-vous d'importer vos produits
import { produits } from "../../../data/produits"; 
import AddToCartButton from "../../../components/AddToCartButton";

export default async function DetailProduit({ params }) {
  const { id } = await params;
  const produit = produits.find((p) => p.id.toString() === id.toString());

  if (!produit) return <div className="text-center mt-20">Produit non trouvé !</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Ajout de la balise image ici */}
        <div className="w-full md:w-1/2">
          <img 
            src={produit.image} 
            alt={produit.nom} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Détails du produit */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{produit.nom}</h1>
          <p className="text-xl text-gray-700 mb-6">{produit.prix} DT</p>
          
          <AddToCartButton produit={produit} />
        </div>
      </div>
    </div>
  );
}