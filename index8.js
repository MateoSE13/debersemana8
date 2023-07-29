function sumarElementosIndiceMayorAlValor(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      if (i > array[i]) {
        suma += array[i];
      }
    }
    return suma;
  }
  
  let numeros = [0, 2, 1, 1];
  
  // Mostrar la suma de elementos donde el índice es mayor al valor
  let sumaElementosIndiceMayorAlValor = sumarElementosIndiceMayorAlValor(numeros);
  console.log("La suma de los elementos donde el índice es mayor al valor es: " + sumaElementosIndiceMayorAlValor);
  