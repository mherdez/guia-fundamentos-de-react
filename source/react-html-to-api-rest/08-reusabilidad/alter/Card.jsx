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