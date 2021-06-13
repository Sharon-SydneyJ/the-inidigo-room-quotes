import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostQuotes from './Components/PostQuotes';


function App() {
  const title = 'Welcome to Imagination Station';

  return (
    <Router>
    <div className="App">
      <h1>{ title }</h1>
       <Navbar /> 
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/postquotes">
            <PostQuotes />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
