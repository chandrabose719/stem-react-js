import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from './components/Layout';
import Home from "./components/Home"
import About from "./components/About"

export default function Routers(){
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Route component={Home}/>
          </Layout>
        </Route>  
        <Route exact path="/about" component={About}/>
      </Switch>
      {/* <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>   */}
    </Router>
  )
} 

