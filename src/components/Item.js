import React from 'react';

export default function Item({ items }) {
  return (
    <div>
      {items.map(item => (
        <p key={item._id}>
          {item.fields.item_name} {item.fields.brand_name}{' '}
          {item.fields.nf_calories} calories
        </p>
      ))}
    </div>
  );
}
