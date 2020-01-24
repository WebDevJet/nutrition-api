import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg dark mb-4'>
        <div
          className='mx-auto font-weight-bold text-light'
          style={{ fontSize: '2rem' }}
        >
          Food Stats
        </div>
      </nav>
    </div>
  );
}
