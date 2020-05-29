import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';

import Off from '../off/Off';

import { motion } from 'framer-motion';
function Home() {
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<div className="container">
				<div className="row mt-4">
					<div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-2">
						<Carousel
							exit={{ opacity: 0 }}
							initial={{ opacity: 0, x: 120 }}
							animate={{ x: 0, transition: { duration: 0.4 }, opacity: 1 }}
							slide="true"
						>
							<Carousel.Item>
								<NavLink to="/product/2">
									<img
										className="d-block w-100 "
										src={require('../../assets/products/xbox-wallpaper.png')}
										alt="First slide"
									/>
								</NavLink>
							</Carousel.Item>
							<Carousel.Item>
								<NavLink to="/product/1">
									<img
										className="d-block w-100"
										src={require('../../assets/products/ps4-wallpaper.png')}
										alt="Third slide"
									/>
								</NavLink>
							</Carousel.Item>
							<Carousel.Item>
								<NavLink to="/product/15">
									<img
										className="d-block w-100 img-fluid"
										src={require('../../assets/products/mac-wallpaper.png')}
										alt="Third slide"
									/>
								</NavLink>
							</Carousel.Item>
						</Carousel>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-2">
						<div className="borde">
							<NavLink to="/product/21">
								<img
									alt="img"
									className="img-fluid borde"
									src={require('../../assets/products/gucci-wallpaper.jpg')}
								/>
							</NavLink>
						</div>
						<div className="borde mt-3">
							<NavLink to="/product/22">
								<img
									alt="img"
									className="img-fluid borde"
									src={require('../../assets/products/nike-wallpaper.jpg')}
								/>
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<Off />
			</div>
		</motion.div>
	);
}

export default Home;
