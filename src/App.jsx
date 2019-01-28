import React, { Component } from 'react';
import Header from './common/header/index'
import store from './store/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable.jsx'
import Login from './pages/login'
import Write from './pages/write'
// BrowserRouter as Router
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
         
            <BrowserRouter>
              <div>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/detail" exact component={Detail}></Route>
                <Route path="/write" exact component={Write}></Route>
              </div>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
