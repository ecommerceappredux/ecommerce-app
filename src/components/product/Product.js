import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getproduct, buyItem } from '../../redux/mainActions';

import Related from '../related/Related';

import { NavLink } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

import { motion } from 'framer-motion';

function Product(props) {
	useEffect(
		() => {
			props.getproduct(props.match.params.id);
		},
		[ props.match.params.id ]
	);
	return (
		<motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			{props.newProduct.length > 0 ? (
				<div>
					<div className="container mt-5">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<IconButton className="cart__button" onClick={() => props.history.goBack()}>
									<ArrowBackRoundedIcon color="disabled" />
								</IconButton>

								<motion.img
									initial={{ x: 160, opacity: 0 }}
									animate={{ x: 0, opacity: 1, transition: { duration: 0.4 } }}
									exit={{ opacity: 0 }}
									alt="img"
									className="d-block img-fluid"
									src={require(`../../assets/products/${props.newProduct[0].img}.png`)}
								/>
							</div>
							<motion.div
								initial={{ y: 120, opacity: 0 }}
								exit={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { duration: 0.4 }, y: 0 }}
								className="col-lg-6 col-md-6 col-sm-12 col-12 sidenav"
							>
								{props.newProduct[0].off ? (
									<div>
										<p className="text-center sidenav mt-2">فروش ویژه</p>
										<hr />
									</div>
								) : null}
								<h3 className="text-right mt-4 mr-3">{props.newProduct[0].name}</h3>
								<p className="text-right mt-4 mr-3">{props.newProduct[0].info}</p>
								{props.newProduct[0].off ? (
									<div className="w-100 d-flex justify-content-end">
										<p className="mr-3 off">
											{((props.newProduct[0].offPrice - props.newProduct[0].price) /
												props.newProduct[0].price).toFixed(2)}%
										</p>
										<p
											className="mr-3 text-right "
											style={{ textDecorationLine: ' line-through', color: 'red' }}
										>
											{props.newProduct[0].offPrice.toLocaleString('ar-EG')} تومان
										</p>
									</div>
								) : null}
								<p className="text-right mr-3">
									{props.newProduct[0].price.toLocaleString('ar-EG')} تومان
								</p>
								{props.newProduct[0].stockNumber < 4 ? (
									<div className="text-right mr-3 mb-2">
										فقط {props.newProduct[0].stockNumber.toLocaleString('ar-EG')} عدد موجود میباشد
									</div>
								) : null}

								<div className="d-flex justify-content-end">
									<NavLink to="/cart">
										<button className="product-btn sidenav">برو به سبد </button>
									</NavLink>
									{props.products.map((item) => {
										if (item.id === JSON.parse(props.match.params.id)) {
											return (
												<button
													key={item.id}
													onClick={() => {
														props.buyItem(props.newProduct[0].id);
													}}
													className="product-btn sidenav"
													disabled={item.inCart ? true : false}
												>
													<p className="p-0 m-0">
														{item.inCart ? 'به سبد اضافه شده' : 'به سبد اضافه کن'}
													</p>
												</button>
											);
										}
									})}
								</div>
							</motion.div>
						</div>
					</div>
					<Related newProduct={props.newProduct[0]} />
				</div>
			) : null}
		</motion.div>
	);
}

const mapState = (state) => {
	return {
		cartPrice: state.cartPrice,
		newProduct: state.newProduct,
		products: state.products
	};
};

const mapDis = (dispatch) => {
	return {
		getproduct: (id) => dispatch(getproduct(id)),
		buyItem: (id) => dispatch(buyItem(id))
	};
};

export default connect(mapState, mapDis)(Product);
