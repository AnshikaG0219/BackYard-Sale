import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NavBar, Main ,Footer,Shop,ContactForm,AboutUs} from './Components'
import { commerce } from "./lib/Commerce";
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
      };

      useEffect(() => {
        fetchProducts();
      }, []);
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route exact path="/shop">
                    <Shop products={products}/>
                </Route>
                <Route exact path="/about">
                    <AboutUs/>
                </Route>
                <Route exact path="/contact">
                    <ContactForm/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App
