import { produits } from "../../data/produits";
import ProduitCard from "../../components/ProduitCard";

export default function PageProduits() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Nos Produits</h1>
      {/* Grille de 3 colonnes (md:grid-cols-3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {produits.map((p) => (
          <ProduitCard key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}