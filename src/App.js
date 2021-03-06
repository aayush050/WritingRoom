import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './Home';
import Blogs from './Blogs';
import Blockchain from './Blockchain';
import Altcoin from './Altcoin';
import Token from './Token.js';
import Coinlist from './Coinlist';
import ScrollToTop from './ScrollToTop';
import Platforms from './Platforms';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <ScrollToTop />
        <Switch>
          <Route exact path ="/" component = { Home } />
          <Route path ="/blogs" component = {Blogs} />
          <Route path="/blockchain" component = {Blockchain} />
          <Route path="/altcoin" component = {Altcoin} />
          <Route path="/token" component = {Token} />
          <Route path="/coins" component = {Coinlist} />
          <Route path="/platforms" component = {Platforms} />
          <Route path="*" component = {NotFound} />    
        </Switch>
      </div>
        <Contact />
     </div>
    
    </Router>
  );
}

export default App;
