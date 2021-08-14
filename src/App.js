import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import React , {useEffect} from 'react'
import index from './components/Layout/index'
import ScrollTop from './components/common/scrollTop/ScrollTop'
import {UrlNames} from './components/Layout/UrlNames'
import contact from './components/Pages/contact/contact'
import About from './components/Pages/about/About'
import Blog from './components/Pages/blog/Blog'

function App() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path={`${UrlNames.HOME}`} exact component={index}></Route>
          <Route path={`${UrlNames.CONTACT}`} exact component={contact}></Route>
          <Route path={`${UrlNames.ABOUT}`} exact component={About}></Route>
          <Route path={`${UrlNames.BLOG}`} exact component={Blog}></Route>
        </Switch>
      </Router>
      <ScrollTop/>


    </>
  );
}

export default App;
