import React from 'react';
import axios from 'axios';
import './Search.scss';

function Search() {
  let currentSearch = '';
  const searchAuthor = (e) => {
    currentSearch = e.target.value;
    console.log(currentSearch);
  };

  return (
    <section className='search-section'>
      <div className='search-wrapper'>
        <input type='text' className='book-search' onChange={searchAuthor} />
        <button></button>
      </div>
    </section>
  );
}

export default Search;
