import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Scraf from './components/Products/Scraf';
import Shirt from './components/Products/Shirt';
import Tshirt from './components/Products/Tshirt';
import Pant from './components/Products/Pant';
import Cart from './components/Cart';
import Shipped from './components/Shipped';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Switch>
      <Route exact path='/'><Header/><Home/><Footer/></Route>
      <Route exact path='/scraf'><Header/> <Scraf/> <Footer/></Route>
      <Route exact path='/shirt'><Header/><Shirt/><Footer/></Route>
      <Route exact path='/tshirt'><Header/><Tshirt/><Footer/></Route>
      <Route exact path='/pant'><Header/><Pant/><Footer/></Route>
      <Route exact path='/signin'><Signin/></Route>
      <Route exact path='/cart'><Header/><Cart/></Route>
      <Route exact path='/shipped'><Shipped/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
