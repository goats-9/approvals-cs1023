import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Login from "./components/Login/Login";
import useToken from "./components/useToken";
/*
const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'ubuntu',
	password : 'sdf06',
	database : 'login'
});
*/
function App() {
  const {token, setToken} = useToken();
  console.warn('Got this', token)
  if (!token) return <Login setToken={setToken}/>
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route path="/" element={<ProductList/>}></Route>
            <Route path="/add" element={<AddProduct/>}></Route>
            <Route path="/edit/:id" element={<EditProduct/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;