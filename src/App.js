import BusinessDetails from './components/BusinessDetails';
import './App.css';
import ReviewDetails from './components/ReviewDetails';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Outcome from './components/Outcome';
import LandingPage from './components/LandingPage';
import SheetPage from './containers/BalanceSheet/SheetPage';
import UserFormPage from './containers/UserForm/UserFormPage';

const App = ()=> {
  return (
    <Router>
    <Switch>
      <Route path="/review"><SheetPage/></Route>
      <Route exact path="/outcome/:decision?" component={Outcome}/>
      <Route path="/details"><UserFormPage/></Route>
      <Route exact path="/"><LandingPage/></Route>
    </Switch>
    </Router>
  );
}

export default App;
