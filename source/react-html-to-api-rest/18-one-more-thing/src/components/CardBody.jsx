export const CardBody = ({ textos }) => {
	return (
		<div className='card-body'>
			<div className='card-text'>
				<p>{textos.parrafo}</p>
			</div>
			<div className='card-title'>
				<h5>{textos.main}</h5>
			</div>
		</div>
	);
};
