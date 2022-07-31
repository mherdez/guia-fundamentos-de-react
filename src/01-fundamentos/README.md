# Fundamentos de React

- Componentes
- Primera aplicación
- Estructura de directorios
- Hola mundo
- Primer componente
- Retornar elementos desde el componente - Fragment
- Impresión de variables en HTML
- Colocar estilos CSS
- Comunicación entre componentes - Props
- DefaultProps
- Evento click
- Hook useState

# Introducción

## React CDN

Una red de entrega de contenido (CDN) está formada por un grupo de servidores distribuidos geográficamente que trabajan juntos para ofrecer una entrega rápida de contenido de Internet.

Una CDN permite la transferencia rápida de activos necesarios para cargar contenido de Internet, incluidas páginas HTML, archivos javascript, hojas de estilo, imágenes y vídeos.

## Crear una nueva aplicación React

### Create React App

Create React App configura tu ambiente de desarrollo de forma que puedas usar las últimas características de Javascript, brindando una buena experiencia de desarrollo, y optimizando tu aplicación para producción. Necesitarás tener Node >= 14.0.0 y npm >= 5.6 instalados.

~~~
npx create-react-app my-app
cd my-app
npm start
~~~

#### Estructura CRA

<img src="https://miro.medium.com/max/608/1*KnQegZWQurLlsLbVSjTzGQ.png" width="320px" style="margin-top: 10px" />

### Vite

Vite (palabra en francés para "rápido", pronunciado como /vit/, como "veet") es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.

~~~
npm create vite@latest
cd app
npm install
~~~

#### Estructura Vite

<img src="https://miro.medium.com/max/640/1*45Ve9eO5RoczvB8NfUKGUw.png" width="200px" style="margin-top: 10px" />

## Componentes y su comunicación

Los componentes es una instancia que permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. Mediante los componentes podemos crear nuestros propios elementos html, cada uno con sus propiedades y métodos particulares que fácilmente se puede reutilizar en toda una aplicación.

### Componente funcional

Un componente funcional es una función que recibe el objeto Props y retorna un ReactNode (un ReactNode puede ser un elemento html, un string, un booleano, entre otros tipos de datos.).

### Props

Los Props se refieren a las propiedades las cuales cumplen un rol importante en el proceso de desarrollo de una aplicación o página web. Los componentes usan Props para mejorar su funcionalidad y poder reusar el código.

Básicamente, los Props, son argumentos que se pasan a los componentes, similares a los argumentos de las funciones utilizados en Javascript y a los atributos en HTML.

## Jsx

JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React. Sirve de preprocesador y transforma el código a JavaScript.

El código JSX es compilado por un “Transpiler”, que quiere decir que toma un código de un lenguaje y lo compila al mismo código en otro lenguaje. Este “Transpiler”, llamado Babel JS, compila el código JSX a código JS.

JSX se parece mucho a HTML, pero en realidad es sintaxis XML. Al final, renderiza HTML, por lo que necesita conocer algunas diferencias entre cómo definiría algunas cosas en HTML y cómo las definiría en JSX.

### Necesitas cerrar todas las etiquetas

Al igual que en XHTML, se debe cerrar todas las etiquetas: no más `<br>` pero en su lugar se usa la etiqueta de cierre automático: `<br />` (lo mismo ocurre con otras etiquetas).

### camelCase es el nuevo estándar

En HTML se encontrará atributos sin ningún caso (p. Ej. onchange). En JSX, se les cambia el nombre a su equivalente **camelCase**:

- onchange => onChange
- onclick => onClick
- onsubmit => onSubmit

`class` se convierte en `className`

Debido al hecho de que JSX es JavaScript yclasses una palabra reservada, no se puede escribir

~~~html
<p class="description">
~~~

  pero necesitas usar

  ~~~html
<p className="description">
~~~

Lo mismo se aplica a `for` que se traduce a `htmlFor`

### Fragment

Un patrón común en React es que un componente devuelva múltiples elementos. Los Fragmentos (Fragment) permiten agrupar una lista de hijos sin agregar nodos extra al DOM.

~~~js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
~~~

También hay una nueva sintaxis corta para declararlos <> </>.

## Eventos


Un evento o manejador de evento no es más que la función que se encarga de definir la funcionalidad que tiene que ejecutarse cuando se dispara un evento.

Manejar eventos en elementos de React es muy similar a manejar eventos con elementos del DOM. Hay algunas diferencias de sintaxis:

- Los eventos de React se nombran usando camelCase, en vez de minúsculas.
- Con JSX pasas una función como el manejador del evento, en vez de un string.

Por ejemplo, en HTML:

~~~html
<button onclick="activateLasers()">
  Activate Lasers
</button>
~~~

En React es algo diferente:
~~~html
<button onClick={activateLasers}>
  Activate Lasers
</button>
~~~

### Tipos de Eventos

- [Mouse](https://es.reactjs.org/docs/events.html#mouse-events)
  - onClick
  - onDoubleClick
  - onMouseEnter
  - onMouseLeave
- [Formulario / enfoque](https://es.reactjs.org/docs/events.html#form-events)
  - onChange
  - onSubmit
  - onFocus
  - onBlur

## Hooks básicos

Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React.

### useState

~~~js
const [state, setState] = useState(initialState);
~~~

Devuelve un valor con estado y una función para actualizarlo.

Durante el renderizado inicial, el estado devuelto (`state`) es el mismo que el valor pasado como primer argumento (`initialState`).

La función `setState` se usa para actualizar el estado. Acepta un nuevo valor de estado y sitúa en la cola una nueva renderización del componente.

### useEffect

~~~js
useEffect(didUpdate);
~~~

Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM.

### useRef

~~~js
const refContainer = useRef(initialValue);
~~~

`useRef` devuelve un objeto ref mutable cuya propiedad `.current` se inicializa con el argumento pasado (`initialValue`). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

## Desestructuración

La desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

## Render condicional

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Usa operadores de JavaScript como `if` o el `operador condicional` y permite que React actualice la interfaz de usuario para que coincida con ellos.

