import React from 'react';
import './BookItem.scss';

const BookItem = (props) => {
  console.log(props.book.name);
  return (
    <div className='book-item'>
      <h1>id: {props.book.id}</h1>
      <h1> Name: {props.book.name}</h1>
      <h2> Writer: {props.book.writer}</h2>
      <p> Detail: {props.book.detail}</p>
      <p> Pages: {props.book.pages} Sf</p>
    </div>
  );
};

export default BookItem;
