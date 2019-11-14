import React from 'react';
import './_styles/App.scss';
import { Main, Country } from "./_pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return <Router>
    <Route path="/" exact component={Main}/>
    <Route path="/country/:code" component={Country}/>
  </Router>;
}

export default App;
