import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { buyItem } from '../../redux/mainActions';

import { motion } from 'framer-motion';

function Subcategory(props) {
	return (
		<motion.div
			animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
			initial={{ opacity: 0, y: 130 }}
			exit={{ opacity: 0 }}
			className="container mt-4"
		>
			<div className="product-wrapper w-100 justify-content-center">
				{props.products.map((product) => {
					if (
						product.category === props.match.params.category &&
						product.subCategory === props.match.params.subcategory
					)
						return (
							<div className="product" key={product.id}>
								<div className="product-img-text">
									<div className="product-img-wrapper mt-1">
										<NavLink to={`/product/${product.id}`}>
											<img
												alt="img"
												className="product-img"
												src={require(`../../assets/products/${product.img}.png`)}
											/>
										</NavLink>
									</div>
									<NavLink
										style={{ textDecoration: 'none', color: 'black' }}
										to={`/product/${product.id}`}
									>
										<div className="mt-1 sidenav">
											<p className="m-0 text-center">{product.name}</p>
											{product.off ? (
												<div className="w-100 d-flex justify-content-center">
													<p className="m-0 text-center off  ">
														{((product.offPrice - product.price) / product.price).toFixed(
															2
														)}%
													</p>
													<p
														className="m-0 text-center "
														style={{ textDecorationLine: ' line-through', color: 'red' }}
													>
														{product.offPrice.toLocaleString('ar-EG')} تومان
													</p>
												</div>
											) : null}
											<p className="text-center m-0">
												{product.price.toLocaleString('ar-EG')} تومان
											</p>
										</div>
									</NavLink>

									<div
										className={
											product.off ? (
												'd-flex justify-content-center'
											) : (
												'd-flex justify-content-center  mt-4'
											)
										}
									>
										<button
											onClick={() => props.buyItem(product.id)}
											className="product-btn sidenav"
											disabled={product.inCart ? true : false}
										>
											{product.inCart ? 'به سبد اضافه شده' : 'به سبد اضافه کن'}
										</button>
									</div>
								</div>
							</div>
						);
				})}
			</div>
		</motion.div>
	);
}

const mapState = (state) => {
	return {
		productsInCart: state.productsInCart,
		products: state.products
	};
};

const mapDis = (dispatch) => {
	return {
		buyItem: (item) => dispatch(buyItem(item))
	};
};

export default connect(mapState, mapDis)(Subcategory);
