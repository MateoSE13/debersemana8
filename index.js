function sumarElementosImpares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        suma += array[i];
      }
    }
    return suma;
  }
  
  let numeros = [10, 50, 8, 4];
  let resultado = sumarElementosImpares(numeros);
  console.log("La suma de los elementos impares es: " + resultado);
  