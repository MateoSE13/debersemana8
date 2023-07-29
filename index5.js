function sumarMultiplosDe3(array) {
    let sumaMultiplosDe3 = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 3 === 0) {
        sumaMultiplosDe3 += array[i];
      }
    }
    return sumaMultiplosDe3;
  }
  
  let numeros = [12, 3, 5, 7];
  
  // Mostrar la suma de elementos múltiplos de 3
  let sumaMultiplosDe3 = sumarMultiplosDe3(numeros);
  console.log("La suma de los elementos múltiplos de 3 es: " + sumaMultiplosDe3);
  