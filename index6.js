function sumarNoMultiplosDe7(array) {
    let sumaNoMultiplosDe7 = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 7 !== 0) {
        sumaNoMultiplosDe7 += array[i];
      }
    }
    return sumaNoMultiplosDe7;
  }
  
  let numeros = [12, 3, 5, 7];
  
  // Mostrar la suma de elementos que no son múltiplos de 7
  let sumaNoMultiplosDe7 = sumarNoMultiplosDe7(numeros);
  console.log("La suma de los elementos que no son múltiplos de 7 es: " + sumaNoMultiplosDe7);
  