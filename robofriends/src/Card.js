import React from 'react';

const Card = (props) =>{

	return (

		<div className="w-64 h-60 border rounded-lg border-gray-100">

			<img src={`https://robohash.org/${props.id}?150x150`} alt="robots" className="object-fill w-full"/>
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>

		);
}


export default Card;