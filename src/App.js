import BusinessDetails from './components/BusinessDetails';
import './App.css';
import ReviewDetails from './components/ReviewDetails';
import { Switch,Routes, Route, BrowserRouter as Router} from 'react-router-dom';

const App = ()=> {
  return (
    <Router>
    <Switch>
      <Route path="/review"><ReviewDetails/></Route>
      <Route exact path="/"><BusinessDetails/></Route>
    </Switch>
    </Router>
  );
}

export default App;
