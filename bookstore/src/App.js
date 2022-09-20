import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBooks from './components/AddBooks';
import BookDetail from './components/Book/BookDetail';
import Books from './components/Book/Books';
import DeleteBook from './components/DeleteBook';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
  <React.Fragment>
<header>
<Header/>
</header>
<main>
  <Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path='/add' element={<AddBooks/>} exact/>
    <Route path='/books' element={<Books/>} exact/>
    <Route path='/delete' element={<DeleteBook/>} exact/>
    <Route path='/books/:id' element={<BookDetail/>} exact/>
  </Routes>
</main>
  </React.Fragment>
  

  );
}

export default App;
