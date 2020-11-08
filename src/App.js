import './App.scss';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Books from './components/Books/Books';

function App() {
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

  return (
    <div className='App'>
      <Header />
      <Search />
      <Books books={books} />
    </div>
  );
}

export default App;
