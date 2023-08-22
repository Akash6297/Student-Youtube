import React  from 'react';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Reset from './components/reset';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import './css/footer.css';
import './css/home.css';
import './css/about.css';
import './css/main.css';
import './css/navbar.css';
import './css/signin.css';
import './css/signup.css';


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
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/reset" component={Reset} />

          <Redirect to="/" />
        </Switch>
       
      <Footer />
   
        </Router>

    
  );
};

export default App;
