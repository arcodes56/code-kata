import BusinessDetails from './components/BusinessDetails';
import './App.css';
import ReviewDetails from './components/ReviewDetails';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Outcome from './components/Outcome';
import LandingPage from './components/LandingPage';
import SheetPage from './containers/BalanceSheet/SheetPage';

const App = ()=> {
  return (
    <Router>
    <Switch>
      <Route path="/review"><SheetPage/></Route>
      <Route exact path="/outcome/:decision?" component={Outcome}/>
      <Route exact path="/details"><BusinessDetails/></Route>
      <Route exact path="/"><LandingPage/></Route>
    </Switch>
    </Router>
  );
}

export default App;
