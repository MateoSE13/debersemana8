function sumarIndicesDeCeros(array) {
    let sumaIndicesCeros = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        sumaIndicesCeros += i;
      }
    }
    return sumaIndicesCeros;
  }
  
  let numeros = [1, 1, 0, 0];
  
  // Mostrar la suma de los índices donde el elemento es 0
  let sumaIndicesCeros = sumarIndicesDeCeros(numeros);
  console.log("La suma de los índices donde el elemento es 0 es: " + sumaIndicesCeros);
  