import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

import ScrollMemory from 'react-router-scroll-memory';

import Product from './components/product/Product';
import Header from './components/header/Header';
import FixBug from './components/FixBug';
import Home from './components/home/Home';
import Subcategory from './components/subcategory/Subcategory';
import Category from './components/category/Category';
import Error from './components/error/Error';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Scroll from './components/scroll/Scroll';

import { AnimatePresence } from 'framer-motion';

function App() {
	return (
		<div>
			<Router>
				<ScrollMemory />
				<ReduxProvider store={store}>
					<Header />
					{/* <FixBug /> */}
					<AnimatePresence exitBeforeEnter>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/product/:id" component={Product} />
							<Route exact path="/categories/:category" component={Category} />
							<Route exact path="/categories/:category/:subcategory" component={Subcategory} />
							<Route component={Error} />
						</Switch>
					</AnimatePresence>

					<div style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: '9999' }}>
						<Scroll />
					</div>

					<Footer />
				</ReduxProvider>
			</Router>
		</div>
	);
}

export default App;
