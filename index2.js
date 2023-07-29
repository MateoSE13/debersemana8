function sumarElementos(array, tipo) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      if (tipo === "impares" && array[i] % 2 !== 0) {
        suma += array[i];
      } else if (tipo === "indicesPares" && i % 2 === 0) {
        suma += array[i];
      } else if (tipo === "pares" && array[i] % 2 === 0) {
        suma += array[i];
      }
    }
    return suma;
  }
  
  let numeros = [10, 50, 8, 4];
  
  
  
  let sumaPares = sumarElementos(numeros, "pares");
  console.log("La suma de los elementos pares es: " + sumaPares);
  