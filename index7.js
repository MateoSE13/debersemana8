function sumarElementosIgualesAlIndice(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === i) {
        suma += array[i];
      }
    }
    return suma;
  }
  
  let numeros = [2, 1, 4, 3];
  
  // Mostrar la suma de elementos donde el valor y el índice son iguales
  let sumaElementosIgualesAlIndice = sumarElementosIgualesAlIndice(numeros);
  console.log("La suma de los elementos donde el valor y el índice son iguales es: " + sumaElementosIgualesAlIndice);
  