import React from 'react';

export default function Item({ items }) {
	return (
		<div>
			{items.map(item => (
				<div className='card text-white dark mx-auto my-2 w-50' key={item._id}>
					<h5 className='card-header '>{item.fields.item_name}</h5>
					<div className='card-body'>
						<p>{item.fields.brand_name}</p>
						<p>{item.fields.nf_calories} calories</p>
					</div>
				</div>
			))}
		</div>
	);
}
