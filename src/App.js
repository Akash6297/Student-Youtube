import React  from 'react';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Registration from './components/Registration';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import './css/footer.css';
import './css/home.css';
import './css/about.css';
import './css/login.css';
import './css/logout.css';
import './css/main.css';
import './css/navbar.css';
import './css/registration.css';


const App = () => {
  

  return (
    
    
      
     
          <Router>
            <div>
            <Navbar />
            </div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={Registration} />
          <Redirect to="/" />
        </Switch>
       
      <Footer />
   
        </Router>

    
  );
};

export default App;
