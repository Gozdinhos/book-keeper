import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Books from './components/Books/Books';

function App(props) {
  const [bookList, setBookList] = useState([]);

  const books = [
    {
      id: 1,
      name: 'Fotoğraftaki Lekeler',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      id: 2,
      name: 'Doğu Ekspresinde Cinayet',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      id: 3,
      name: 'Uğultulu Tepeler',
      detail: ' Drama',
      writer: 'Emily Bronte',
      pages: '170',
    },
    {
      id: 4,
      name: 'Fotoğraftaki Lekeler',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      id: 5,
      name: 'Doğu Ekspresinde Cinayet',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      id: 6,
      name: 'Uğultulu Tepeler',
      detail: ' Drama',
      writer: 'Emily Bronte',
      pages: '170',
    },
  ];

  const getBooksOf = async (author) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=AIzaSyBLy1qIK-9y8FulKeMJZeuQfBK_jqbyxE0`
    );

    // console.log(response.data.items);
  };
  return (
    <div className='App'>
      <Header />
      <Search />
      <Books books={books} />
    </div>
  );
}

export default App;
