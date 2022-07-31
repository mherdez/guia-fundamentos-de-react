import React, { Fragment } from 'react';
import './App.css';

import Card from './components/Card';
import Title from './components/Title';

function App() {
	return (
		<Fragment>
			<Title />
			<div className="container">
				<Card id={5} name={'User A'} />
				<Card id={4} name={'User B'} />
				<Card id={7} name={'User C'} />
				<Card id={8} name={'User D'} />
				<Card id={9} name={'User E'} />
				<Card id={29} name={'User F'} />
			</div>
		</Fragment>
	);
}

export default App;
