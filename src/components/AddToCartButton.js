"use client"; // هوني السر!
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // عدل المسار حسب وين موجود الملف

export default function AddToCartButton({ produit }) {
  const { ajouterAuPanier } = useContext(CartContext);

  return (
    <button 
      onClick={() => ajouterAuPanier(produit)} 
      className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      Acheter
    
    </button>
  );
}