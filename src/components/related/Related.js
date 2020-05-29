import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { related } from '../../redux/mainActions';

import './Related.scss';

function Related(props) {
	useEffect(
		() => {
			props.related(props.newProduct.category, props.newProduct.id);
		},
		[ props.newProduct.category, props.newProduct.id ]
	);

	return (
		<div>
			<p className="text-right mt-3 mr-4 sidenav">محصولات مرتبط</p>
			<hr className="p-0 m-0" />
			<div className="related mt-5 sidenav">
				{props.filteredProducts.map((item) => {
					return (
						<div className="item" key={item.id}>
							<div className="width">
								<NavLink
									style={{
										textDecoration: 'none',
										color: 'black'
									}}
									to={`/product/${item.id}`}
								>
									<img
										alt="img"
										className="d-block img-fluid mt-2 ml-2 mr-2"
										src={require(`../../assets/products/${item.img}.png`)}
									/>

									<p className="text-center mt-3">{item.name}</p>
								</NavLink>
								{item.off ? (
									<div className="w-100 d-flex justify-content-center">
										<p className="mr-3 off">
											<NavLink
												style={{
													textDecoration: 'none',
													color: 'white'
												}}
												to={`/product/${item.id}`}
											>
												{((item.offPrice - item.price) / item.price).toFixed(2)}%
											</NavLink>
										</p>
										<p
											className="mr-2 text-center "
											style={{ textDecorationLine: ' line-through', color: 'red' }}
										>
											<NavLink
												style={{
													textDecoration: 'none',
													color: 'red'
												}}
												to={`/product/${item.id}`}
											>
												{item.offPrice.toLocaleString('ar-EG')} تومان
											</NavLink>
										</p>
									</div>
								) : null}
								<NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/product/${item.id}`}>
									<p className="text-center ">{item.price.toLocaleString('ar-EG')} تومان</p>
								</NavLink>
								<button className="text-center related-btn p-2 mb-2">
									<NavLink
										style={{ textDecoration: 'none', color: 'white' }}
										to={`/product/${item.id}`}
									>
										مشاهده
									</NavLink>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const mapState = (state) => {
	return {
		filteredProducts: state.filteredProducts
	};
};

const mapDis = (dispatch) => {
	return {
		related: (category, id) => dispatch(related(category, id))
	};
};

export default connect(mapState, mapDis)(Related);
