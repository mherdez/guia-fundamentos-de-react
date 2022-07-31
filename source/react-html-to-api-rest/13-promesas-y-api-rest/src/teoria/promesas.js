const saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    const saludo = '';

    if (saludo) {
      resolve(saludo);
    } else {
      reject('No hay saludo');
    }
  }, 3000);
});

saludar
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));
console.log('Fin programa');
