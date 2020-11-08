import React from 'react';
import './Search.scss';

function Search() {
  return (
    <section className='search-section'>
      <div className='search-wrapper'>
        <input type='text' className='book-search' />
      </div>
    </section>
  );
}

export default Search;
