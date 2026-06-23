"use client";
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [panier, setPanier] = useState([]);

  const ajouterAuPanier = (produit) => {
    setPanier((prev) => [...prev, produit]);
    alert(produit.nom + " a été ajouté au panier avec succès !");
  };

  return (
    <CartContext.Provider value={{ panier, ajouterAuPanier }}>
      {children}
    </CartContext.Provider>
  );
}