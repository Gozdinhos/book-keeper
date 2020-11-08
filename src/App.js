import './App.scss';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  const books = [
    {
      name: 'Fotoğraftaki Lekeler',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      name: 'Doğu Ekspresinde Cinayet',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      name: 'Uğultulu Tepeler',
      detail: ' Drama',
      writer: 'Emily Bronte',
      pages: '170',
    },
    {
      name: 'Fotoğraftaki Lekeler',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      name: 'Doğu Ekspresinde Cinayet',
      detail: ' Murder',
      writer: 'Agatha Christie',
      pages: '170',
    },

    {
      name: 'Uğultulu Tepeler',
      detail: ' Drama',
      writer: 'Emily Bronte',
      pages: '170',
    },
  ];
  console.log(books);
  return (
    <div className='App'>
      <Header />
      <Search />
    </div>
  );
}

export default App;
