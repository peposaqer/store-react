import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss" 
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './store/store';
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/Product" component={Products} exact />
        <Route path="/Product/:id" component={Product} />
      </div>
      <Footer />
    </Router>
  );
}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
