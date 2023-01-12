//REACT ROUTES IMPORT
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

//VIEWS AND PAGES
import Main from './Pages/Main';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
