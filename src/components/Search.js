import React, { useState } from 'react';

export default function Search({ setSearch }) {
  const [newSearch, setNewSearch] = useState({ title: '' });

  const onChange = e => {
    setNewSearch({ title: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearch(newSearch.title);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={newSearch.title}
          onChange={onChange}
          className='form-control w-25'
        />
        <button
          type='submit'
          value='Submit'
          className='btn btn-primary'
          // style={{ backgroundColor: '#0fd6bd' }}
        >
          Search
        </button>{' '}
      </form>
    </div>
  );
}
