import React from 'react';

const Coin = props => {
	return (
			<div className="coin">
				<span>{props.nominal}</span>
			</div>
	);
};


export default Coin;

