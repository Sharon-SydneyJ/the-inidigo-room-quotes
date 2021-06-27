import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostQuotes from './Components/PostQuotes';
import QuotesContainer from './Components/QuotesContainer';


function App() {
  const title = 'Welcome to The Indigo Room Quotes';

  return (
    
    <Router>
    <div className="container">
      <h1 className="text-center">{ title }</h1>
      <div className="container">
      <Navbar /> 
      </div>
      
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/postquotes">
            <PostQuotes />
          </Route>
          <Route path="/quotes/:id">
          <QuotesContainer />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>

  );

  
}


export default App;
