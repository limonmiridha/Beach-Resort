import React from "react";
import { Route,Switch } from "react-router-dom";
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
