import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <ScrollToTop />
            <Header />
            <main>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/products' component={ProductListScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen}></Route>
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
