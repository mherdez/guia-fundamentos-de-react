import React, { useState } from 'react';
import './Card.css';

function Card({ id, name = 'Desconocida', size = '' }) {
	const [enabled, setEnabled] = useState(true);
	const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

	let className = enabled ? '' : ' disabled ';

	className +=
		size === 'small' ? 'is-small' : size === 'large' ? 'is-large' : '';

	return (
		<article className="card">
			<picture>
				{id ? (
					<img
						onClick={() => setEnabled(!enabled)}
						src={src}
						className={'card-img-top ' + className}
						alt=""
					/>
				) : (
					<img
						src="https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg"
						className={'card-img-top ' + className}
						alt=""
					/>
				)}
				<h3 className="card-title-user">{enabled ? name : 'Suspendida'}</h3>
			</picture>
		</article>
	);
}

export default Card;
