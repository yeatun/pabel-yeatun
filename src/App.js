import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import ContactPage from './Components/ContactPage/ContactPage';
import Footer from './Components/Footer/Footer';
import Error from './Components/Error/Error';
// import About from './Components/About/About';
// import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
// import Footer from './Components/Footer/Footer';
// import ContactPage from './Components/ContactPage/ContactPage';
// import BlogPage from './Components/BlogPage/BlogPage';
// import Error from './Components/Error/Error';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home ></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/projects">
              <Projects></Projects>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/contact">
              <ContactPage></ContactPage>
            </Route>
             
            
          
           
            <Route path="*">
              <Error></Error>
            </Route>  
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;