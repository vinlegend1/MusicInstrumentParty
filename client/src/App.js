import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Home from "./components/home.component";
import Drums from "./components/drums.component";
import Piano from "./components/piano.component";
import Join from "./components/join.component";
import './App.css';

class App extends React.Component {

  render() {


    return (
      <Router>
        <Navbar first="Home" sec="Piano" secTo="/piano" />
  
        <Route path="/" exact component={Home}></Route>
        <Route path="/piano" exact component={Piano}></Route>
        <Route path="/drums" exact component={Drums}></Route>
        <Route path="/join" exact component={Join}></Route>
        <Footer />
      </Router>
    );
  }
}

export default App;
