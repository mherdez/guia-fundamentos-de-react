# Bases de javascript

:::warning Como presentar material
- Concepto
- Explicación objetiva
- Código
:::

- Variables y constantes
- Template String
- Objetos literales
  ~~~js
  const persona = {
    nombre : 'Pedro',
    edad : 20
  }
  ~~~

- Arreglos
- Funciones
- Desestructuración
  - Arreglos
  - Objetos
- Funciones comunes de arreglos
  - map, find, includes, etc.
- Promesas
- Fetch
- Async - await
- Operador ternario

:::danger Valorar incluir estos temas
- Import y export
- Exportaciones múltiples y por defecto
:::

## Api Rest

Un API (interfaz del programa de aplicación) es un conjunto de reglas que permite que diferentes programas se comuniquen entre sí. Describe la manera apropiada para que un desarrollador de software componga un programa en un servidor que se comunica con varias aplicaciones cliente.

## Promesas

Es un objeto que representa la terminación o el fracaso de una operación asíncrona y su valor resultante.

Un Promise está en uno de estos estados:

- pending (pendiente): estado inicial, ni cumplido ni rechazado.
- fulfilled (cumplida): lo que significa que la operación se completó con éxito.
- rejected (rechazada): lo que significa que la operación falló.

### SetTimeout

Establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.

### SetInterval

Llama a una función o ejecuta un fragmento de código de forma reiterada, con un retardo de tiempo fijo entre cada llamada.

### clearInterval()

Cancela una acción reiterativa que se inició mediante una llamada a setInterval

## Fetch

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.


## Async

La declaración de función async define una función asíncrona, la cual devuelve un objeto

## Await

El operador `await` es usado para esperar a una Promise. Sólo puede ser usado dentro de una función `async`.
