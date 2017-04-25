import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  hashHistory,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>
      Home
    </h2>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <h2>{ match.params.id }</h2>
  </div>
)

class App extends Component {
  
  render() {
    const { children } = this.props;
    console.log('child', children);

    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact/view1">Contact view 1</Link></li>
          <li><Link to="/contact/view2">Contact view 2</Link></li>
          <li><Link to="/contact/view3">Contact view 3</Link></li>
          <li><Link to="/contact/view4">Contact view 4</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export const SameViewWithParam = () => (
  <Router history={hashHistory}>
    <div>
      <App>
        <Route exact={true} path="/" component={Home} />
        <Route path="/contact/:id" component={Contact} />
      </App>
    </div>
  </Router>
)

export default App;
