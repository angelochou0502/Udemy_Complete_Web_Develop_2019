import React from 'react';


function Card({id, name, email}) {
	return (
		<div className="tc bg-light-pink dib br3 pa3 ma3 grow shadow-5">
			<img alt="BUG!" src={`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)

};

export default Card;