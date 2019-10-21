const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x);
console.log(coords['x']);

console.log(coords.z); // erreur en TS
console.log(coords['z']); // pas d'erreur en TS

// objet extensible (similaire aux tableaux associatifs PHP)
coords.z = 3;

delete coords.z;

