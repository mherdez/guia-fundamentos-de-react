# Ruta 1 - Random Users v1.0

<img :src="$withBase('/img/random-users-1.png')">

## Html

**index.html**

~~~html
<head>
  <!-- CSS -->
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <h1>Random Users</h1>
  <div id="app">
    <article class="card">
      <picture>
        <img
          class="card-img-top"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt=""
        />
        <h3 class="card-title-user">User A</h3>
      </picture>
    </article>
  </div>
</body>
~~~

**style.css**
~~~css
body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 20px 0;
  background: lightgray;
  font-family: 'SST', sans-serif;
}

#app {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.card {
  padding: 30px;
  background: white;
  box-shadow: 5px 5px 25px #444444;
  border-radius: 15px;
  text-align: center;
}

.card-img-top {
  width: 200px;
  border-radius: 50%;
}

img {
width: 100%;
}

.card-title-user {
  margin: 20px 0 0 0;
}

~~~

## Javascript

**index.html**
~~~html
<head>
  <!-- App -->
  <script defer src="app.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <h1>Random Users</h1>
  <div id="app"></div>
</body>
~~~

**app.js**
~~~js
const $app = document.querySelector('#app');
const src = 'https://randomuser.me/api/portraits/men/';
const users = [
  { id: 1, name: 'User A' },
  { id: 2, name: 'User B' },
  { id: 3, name: 'User C' },
  { id: 4, name: 'User D' },
  { id: 5, name: 'User E' },
  { id: 6, name: 'User K' },
];
users.forEach((user) => {
  const cardHTML = `
    <article class="card">
      <picture>
        <img
          class="card-img-top"
          src="https://randomuser.me/api/portraits/men/${user.id}.jpg"
          alt=""
        />
        <h3 class="card-title-user">${user.name}</h3>
      </picture>
    </article>`;
  $app.innerHTML += cardHTML;
});
~~~

## Javascript Componente

**index.html**
~~~html
<head>
  <!-- App -->
  <script src="Card.js"></script>
  <script defer src="app.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1>Random Users</h1>
  <div id="app"></div>
</body>
~~~

**app.js**
~~~js
const $app = document.querySelector('#app');

$app.innerHTML += Card({ id: 1, name: 'User A' });
$app.innerHTML += Card({ id: 2, name: 'User B' });
$app.innerHTML += Card({ id: 3, name: 'User C' });
$app.innerHTML += Card({ id: 4, name: 'User D' });
$app.innerHTML += Card({ id: 5, name: 'User E' });
$app.innerHTML += Card({ id: 6, name: 'User F' });
~~~

**Card.js**
~~~js
function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;

  return `<article class="card">
    <picture>
      <img
        class="card-img-top"
        src=${src}
        alt=""
      />
      <h3 class="card-title-user">${props.name}</h3>
    </picture>
  </article>`;
}
~~~

## React CDN

**index.html**

~~~html
<head>
  <!-- React -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- App -->
  <script src="Card.js"></script>
  <script defer src="app.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <h1>Random Users</h1>
  <div id="app"></div>
</body>
~~~

**app.js**

~~~js
const $app = document.querySelector('#app');
const root = ReactDOM.createRoot($app);

const el = React.createElement;

root.render(el(React.Fragment, {},  [
    el(Card, { id: 1, name: 'User A' }),
    el(Card, { id: 2, name: 'User B' }),
    el(Card, { id: 3, name: 'User C' }),
  ])
)
~~~

**Card.js**

~~~js
function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;

  return el('article', {className: 'card' }, [
    el('picture', {}, [
      el('img', { src, className: 'card-img-top' }),
      el('h3',  { className: 'card-title-user' }, `${ props.name }`),
    ]),
  ]);
}
~~~

## Jsx

**index.html**
~~~html
<head>
  <!-- React -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Babel -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

  <!-- App -->
  <script src="Card.jsx" type="text/babel"></script>
  <script defer src="app.js" type="text/babel"></script>

  <!-- CSS -->
  <link rel="stylesheet" href="../../style.css" />
</head>
<body>
  <h1>Random Users</h1>
  <div id="app"></div>
</body>
~~~

**app.js**
~~~js
const $app = document.querySelector('#app');
const root = ReactDOM.createRoot($app);

root.render(
  <>
    <Card id={1} name={'User A'} />
    <Card id={2} name={'User B'} />
    <Card id={3} name={'User C'} />
  </>
);
~~~

Card.jsx
~~~js
function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;
  return (
    <article className="card">
      <picture>
        <img src={src} className="card-img-top" />
        <h3 className="card-title-user">{props.name}</h3>
      </picture>
    </article>
  );
}
~~~

## Eventos

**Card.jsx**
~~~js
function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;
  return (
    <article className="card">
      <picture>
        <img
          src={src}
          className="card-img-top"

          onClick={(e) => {
            e.target.classList.toggle('disabled');
          }}

        />
        <h3 className="card-title-user">{props.name}</h3>
      </picture>
    </article>
  );
}
~~~

## Hooks

**index.html**

~~~html
<style>
  .disabled {
    opacity: 0.5;
  }
</style>
~~~

**Card.jsx**
~~~js
// Incorporando el hook useState
const useState = React.useState;

function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;

  // Implementado useState
  const [enabled, setEnabled] = useState(true);
  const className = enabled ? '' : 'disabled';

  return (
    <article className="card">
      <picture>
        <img
          src={src}
          className={'card-img-top ' + className}
          onClick={() => setEnabled(!enabled)}
        />
        <h3 className="card-title-user">{props.name}</h3>
      </picture>
    </article>
  );
}
~~~

## Reusabilidad

**index.html**

~~~html
<style>
  .disabled {
    opacity: 0.5;
  }
  .is-small {
    width: 150px;
  }
  .is-big {
    width: 250px;
  }
</style>
~~~

**app.js**

~~~js
<Card id={1} name={'User A'} size={'small'} />
<Card id={2} name={'User B'} />
<Card id={3} name={'User C'} size={'big'}/>
~~~


**Card.jsx**

~~~js
// Incorporando el hook useState
const useState = React.useState;

function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;

  // Implementado useState
  const [enabled, setEnabled] = useState(true);
  let classNameDisabled = enabled ? '' : 'disabled';

  // Personalizando el tamaño de las tarjetas
  let classNameSize =
    props.size === 'small'
      ? ' is-small '
      : props.size === 'big'
        ? ' is-big '
        : '';

  return (
    <article className="card">
      <picture>
        <img
          src={src}
          className={'card-img-top ' + classNameDisabled + classNameSize}
          onClick={() => setEnabled(!enabled)}
        />
        <h3 className="card-title-user">{props.name}</h3>
      </picture>
    </article>
  );
}
~~~

## Desestructuración

**app.js**

~~~js
<Card id={1} name={'User A'} size={'small'} />
<Card id={2} />
<Card id={3} name={'User C'} size={'big'}/>
~~~

**Card.jsx**

~~~js
// Incorporando el hook useState
const useState = React.useState;

function Card({ id, name = 'Anónimo', size }) { // desestructurando las props
  const src = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  // Implementado useState
  const [enabled, setEnabled] = useState(true);
  let classNameDisabled = enabled ? '' : 'disabled';

  // Personalizando el tamaño de las tarjetas
  let classNameSize =
    size === 'small'
      ? ' is-small '
      : size === 'big'
        ? ' is-big '
        : '';

  return (
    <article className="card">
      <picture>
        <img
          src={src}
          className={'card-img-top ' + classNameDisabled + classNameSize}
          onClick={() => setEnabled(!enabled)}
        />
        <h3 className="card-title-user">{name}</h3>
      </picture>
    </article>
  );
}
~~~

## Render condicional

**app.js**

~~~js
<Card id={1} name={'User A'} size={'small'} />
<Card />
<Card id={3} name={'User C'} size={'big'}/>
~~~

**Card.jsx**

~~~js
// Incorporando el hook useState
const useState = React.useState;

function Card({ id, name = 'Anónimo', size }) { // desestructurando las props
  const src = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  // Implementado useState
  const [enabled, setEnabled] = useState(true);
  let classNameDisabled = enabled ? '' : 'disabled';

  // Personalizando el tamaño de las tarjetas
  let classNameSize =
    size === 'small'
      ? ' is-small '
      : size === 'big'
      ? ' is-big '
      : '';

  return (
    <article className="card">
      <picture>

      {/* Render condicional */}
      {id ? (
            <img
              src={src}
              className={'card-img-top ' + classNameDisabled + classNameSize}
              onClick={() => setEnabled(!enabled)}
            />)
          : (
            <img
              src="https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg"
              className={'card-img-top ' + classNameDisabled + classNameSize}
            />)
      }

        <h3 className="card-title-user">{name}</h3>
      </picture>
    </article>
  );
}
~~~
