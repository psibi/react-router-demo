import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  IndexRoute,
  IndexLink,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>
      Home
    </h2>
  </div>
)

const Stuff = () => (
  <div>
    <h2>Stuff</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

class App extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { children } = this.props;
    console.log('child', children);

    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stuff">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}



export const SPRouter = () => (
  <Router history={hashHistory}>
    <div>
      <App>
        <Route exact={true} path="/" component={Home} />
        <Route path="/stuff" component={Stuff} />
        <Route path="/contact" component={Contact} />
      </App>
    </div>
  </Router>
)

export default App;
