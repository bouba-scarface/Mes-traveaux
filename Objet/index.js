const objet = {
  sol: {
    positions: { left: 11, width: 14, height: 76, top: 33 },
    products: [],
  },
  cuisine: {
    positions: { left: 43, width: 53, height: 21, top: 39 },
    products: [],
  },
};
objet["sol"].products.push({ name: "Keita" });
objet["sol"].products.push({ name: "Diallo" });
console.log(objet.sol.products);
