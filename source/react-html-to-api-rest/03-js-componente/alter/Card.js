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
