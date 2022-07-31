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