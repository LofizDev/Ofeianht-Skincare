import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import index from './components/Layout/index'
import ScrollTop from './components/common/scrollTop/ScrollTop'



function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={index}></Route>
        </Switch>
      </Router>
      <ScrollTop/>


    </>
  );
}

export default App;
