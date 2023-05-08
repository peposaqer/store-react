import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss"
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './store/store';
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/about";
import Services from './pages/services';
import Contact from "./pages/contact"
import Profile from "./pages/profile"
import SignUp from "./pages/signUp"
import LogIn from "./pages/logIn"
import Forget from "./pages/forgetPassword"
import Verify from "./pages/verifyCode"
import Navbar from "./Navbar/Navbar"
// import ServiceItem from "./pages/ServiceItem"
import Footer from "./Footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Navbar />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/logIn" component={LogIn} exact />
            <Route path="/forgetPassword" component={Forget} exact />
            <Route path="/verifyCode" component={Verify} exact />
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/Cart" component={Cart} exact />
            <Route path="/Products" component={Products} exact />
            <Route path="/Contact" component={Contact} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/Product/:id" component={Product} />
            {/* <Route path="/ServiceItem/:id" component={ServiceItem} /> */}
        <Footer />
      </Router>
    </>
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