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