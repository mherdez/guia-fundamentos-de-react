const $app = document.querySelector('#app');

const root = ReactDOM.createRoot($app);

root.render(
  <React.Fragment>
    <Card id={1} name={'User A'} size={'small'} />
    <Card />
    <Card id={3} name={'User C'} size={'big'}/>
  </React.Fragment>
);
