const coords = {
  x: 1,
  y: 2,
};

console.log(coords.x);
console.log(coords['x']);

// console.log(coords.z); // erreur en TS
console.log(coords['z']); // pas d'erreur en TS

interface ICoords {
  x: number;
  y: number;
  [_:string]: any;
}

const coordsAvecInterface: ICoords = {
  x: 1,
  y: 2,
};

coordsAvecInterface.z = 3;

console.log(coordsAvecInterface.test);