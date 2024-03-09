import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" exact component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
