var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
// var IndexRoute = ReactRouter.IndexRoute;
// var browserHistory = ReactRouter.browserHistory;
// var createBrowserHistory = require('history/lib/createBrowserHistory');
// var browserHistory = ReactRouter.browserHistory;
// import { browserHistory } from 'react-router'
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

import { hashHistory } from 'react-router'

var App = React.createClass({

  render: function() {

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        
        <Order />
        <Inventory />
      </div>
      )
  }
})


var Header = React.createClass({
  render: function() {
    console.log(this)
    return (
    <header className="top">
      <h1>Catch 
        <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
        </span> 
      Day</h1>
      <h3 className="tagline"><span>{this.props.tagline}</span></h3>
    </header>  
    )
  }
})


var Order = React.createClass({
  render: function() {
    return (
    <p>Order</p>  
    )
  }
})


var Inventory = React.createClass({
  render: function() {
    return (
    <p>Inventory</p>  
    )
  }
})


// allows us to pick store
var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
            <h2>Please enter a store</h2>
            <input type="text" ref="storeId" required />
            <input type="Submit" />
        </form>
    )
  }
})


var NotFound = React.createClass({
  render: function(){
    return<h1>Not Found!</h1>
  }
})


/*
Routes
*/
var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  
  </Router>
  
  )

var routess = (
  <Router history={browserHistory}>
    <Route path="/" component={StorePicker}>
      <IndexRoute component={App}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));

