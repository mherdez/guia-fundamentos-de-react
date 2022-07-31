function Card(props) {
  const src = `https://randomuser.me/api/portraits/men/${props.id}.jpg`;

  return el('article', {className: 'card' }, [
    el('picture', {}, [
      el('img', { src, className: 'card-img-top' }),
      el('h3',  { className: 'card-title-user' }, `${ props.name }`),
    ]),
  ]);
}