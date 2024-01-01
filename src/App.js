import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import FooterTemplete from './components/FooterTemplete';
import AddOrEditEmployeeModal from './components/AddOrEditEmployeeModal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/getEmployeeList' element={<ListEmployeeComponent />}></Route>
      </Routes>
      <FooterTemplete />
    </BrowserRouter>
  )
}

export default App;
