import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home"
import Logo from './Components/Logo';
import Navbar from './Components/Navbar';
import Topo from './Components/Topo'
import Welcome from './Components/Welcome'





function App() {
  return (
        <Router>
            <Topo></Topo>            
            <Navbar></Navbar>
            <Logo></Logo>
            <Welcome></Welcome>

            <ul>
              <li><Link to="./">Home</Link></li>
            </ul>

        
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        </Router>
  )
}

export default App;
