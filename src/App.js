import BusinessDetails from './components/BusinessDetails';
import './App.css';
import ReviewDetails from './components/ReviewDetails';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Outcome from './components/Outcome';
import LandingPage from './components/LandingPage';

const App = ()=> {
  return (
    <Router>
    <Switch>
      <Route path="/review"><ReviewDetails/></Route>
      <Route path="/outcome"><Outcome/></Route>
      <Route exact path="/details"><BusinessDetails/></Route>
      <Route exact path="/"><LandingPage/></Route>
    </Switch>
    </Router>
  );
}

export default App;
