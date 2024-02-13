import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Reigister';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Ingredients from './components/Ingredients';
import Equipments from './components/Equipment';
import WhoMakesit from './components/WhoMakesit';
import Booking from './components/Booking';
import Policies from './components/Policies';
import Cart from './components/Cart';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/reviews" component={Reviews} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/ingredients" component={Ingredients} />
      <Route exact path="/equipments" component={Equipments} />
      <Route exact path="/who" component={WhoMakesit} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/policy" component={Policies} />
      <Route exact path="/cart" component={Cart} />
      
      
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
