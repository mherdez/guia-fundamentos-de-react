const el = React.createElement;
const $app = document.querySelector('#app');

const root = ReactDOM.createRoot($app);

root.render(el(React.Fragment, {},  [
    el(Card, { id: 1, name: 'User A' }),
    el(Card, { id: 2, name: 'User B' }),
    el(Card, { id: 3, name: 'User C' }),
  ])
)