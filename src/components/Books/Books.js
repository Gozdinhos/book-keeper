import React from 'react';
import BookItem from '../BookItem/BookItem';

function Books(props) {
  return (
    <section className='books-section'>
      <div className='books-wrapper'>
        {props.books.map((book) => (
          <BookItem book={book} />
        ))}
      </div>
    </section>
  );
}

export default Books;
