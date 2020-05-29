import React, { useState, useEffect } from 'react';
import './Cart.scss';

import { connect } from 'react-redux';

import { quantity, remove, discount } from '../../redux/mainActions';

import { NavLink } from 'react-router-dom';

import { Table } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import RemoveCircleRoundedIcon from '@material-ui/icons/RemoveCircleRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

// Dialog

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// dialog expansii=on panel

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { motion } from 'framer-motion';

function Cart(props) {
	const [ total, setTotal ] = useState(0);
	const [ discount, setDiscount ] = useState('');

	// handle close dialog
	const [ open, setOpen ] = useState(false);
	const [ button, setButton ] = useState(true);
	const [ openn, setOpenn ] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDiscount = (e) => {
		setDiscount(e.target.value);
	};

	useEffect(
		() => {
			const total = props.products.reduce((prev, current) => {
				if (current.inCart && current.off) prev = prev + (current.offPrice - current.price) * current.number;
				return prev;
			}, 0);
			setTotal(total);
		},
		[ props.products ]
	);

	return (
		<motion.div
			animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
			initial={{ opacity: 0, y: 130 }}
			exit={{ opacity: 0 }}
			className="container sidenav"
		>
			<motion.div animate={{ opacity: openn ? 1 : 0 }} initial={{ opacity: 0 }} className="alert text-center">
				<RemoveCircleRoundedIcon className="mr-2" onClick={() => setOpenn(false)} fontSize="small" />
				کد تخفیف اعمال شد
			</motion.div>
			<IconButton className="cart__button mt-2" onClick={() => props.history.goBack()}>
				<ArrowBackRoundedIcon color="disabled" />
			</IconButton>
			<div className="mt-3">
				{props.productsInCart < 1 ? <p className="text-center mt-2">سبد شما خالی است</p> : null}
			</div>

			<div className="mt-3">
				<Table responsive>
					<thead>
						<tr>
							<th className="text-center" />
							<th className="text-center">قیمت نهایی</th>
							<th className="text-center">تعداد</th>
							<th className="text-center">قیمت</th>
							<th className="text-center">نام کالا</th>
						</tr>
					</thead>
					<tbody>
						{props.products.map((item) => {
							if (item.inCart) {
								return (
									<tr key={item.id}>
										<td className="text-center ">
											<IconButton onClick={() => props.remove(item.id)} className="cart__btn ">
												<DeleteForeverRoundedIcon color="disabled" />
											</IconButton>
										</td>
										<td className="text-center ">
											{(item.number * item.price).toLocaleString('ar-EG')}
										</td>

										<td className="text-center ">
											<IconButton
												onClick={() => props.quantity('inc', item.id)}
												className="cart__btn"
											>
												<AddCircleRoundedIcon color="disabled" />
											</IconButton>

											<span className="p-3">{item.number.toLocaleString('ar-EG')}</span>

											<IconButton
												onClick={() => props.quantity('dec', item.id)}
												className="cart__btn "
											>
												<RemoveCircleRoundedIcon color="disabled" />
											</IconButton>
										</td>

										<td className="text-center ">{item.price.toLocaleString('ar-EG')}</td>

										<td className="text-center">
											<NavLink className="cart__link" to={`/product/${item.id}`}>
												{item.name}
												<img
													className="img-fluid ml-3 cart__img"
													src={require(`../../assets/products/${item.img}.png`)}
												/>
											</NavLink>
										</td>
									</tr>
								);
							}
						})}
					</tbody>
				</Table>
				<hr />
				<div className="d-flex justify-content-around">
					<button
						onClick={handleClickOpen}
						disabled={props.productsInCart < 1 ? true : false}
						className="product-btn sidenav"
					>
						چک اوت
					</button>

					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle className="d-flex justify-content-end" id="alert-dialog-title">
							<p className="sidenav m-0 p-0">چک اوت</p>
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<div className="d-flex justify-content-between sidenav">
									<b>{props.productsInCart.toLocaleString('ar-EG')}</b>
									<b> تعداد کالا ها </b>
								</div>

								<div className="d-flex justify-content-between sidenav">
									<b>{total.toLocaleString('ar-EG')} تومان</b>
									<b>سود شما از این خرید</b>
								</div>
								<div className="d-flex justify-content-between sidenav">
									<b>{props.cartPrice.toLocaleString('ar-EG')} تومان</b>
									<b>مبلغ پرداختی کل</b>
								</div>

								<ExpansionPanel className="mt-3 sidenav" dir="rtl">
									<ExpansionPanelSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										کالا های انتخاب شده
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<div dir="rtl" className="row">
											<div className="col-12 ml-auto mr-2 justify-content-center">
												{props.products.map((item) => {
													if (item.inCart) {
														return (
															<div key={item.id}>
																<p className="d-inline text-center ml-2 ">
																	{item.name}
																</p>

																<img
																	className="img-fluid ml-3 mt-2 mb-2 cart__img"
																	src={require(`../../assets/products/${item.img}.png`)}
																/>
															</div>
														);
													} else {
														return null;
													}
												})}
											</div>
										</div>
									</ExpansionPanelDetails>
								</ExpansionPanel>
								<ExpansionPanel className="sidenav" dir="rtl">
									<ExpansionPanelSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										کد تخفیف
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<div dir="rtl" className="row">
											<div className="col-12 d-flex justify-content-center">
												<input
													className="cart__discount"
													type="text"
													value={discount}
													onChange={handleDiscount}
													placeholder="تایپ کنید TAKHFIF"
													disabled={props.isDiscount ? true : false}
												/>
											</div>
											<div className="col-12 justify-content-center d-flex mt-1">
												<button
													className=" btn btn-success text-center sidenav cart__discount-btn mb-2"
													type="submit"
													disabled={discount === 'TAKHFIF' && button === true ? false : true}
													onClick={() => {
														props.discount();
														setButton(false);
														setOpenn(true);
													}}
												>
													ثبت کد تخفیف
												</button>
											</div>
										</div>
									</ExpansionPanelDetails>
								</ExpansionPanel>
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<button className="product-btn sidenav" color="primary" autoFocus>
								پرداخت
							</button>
							<button className="product-btn sidenav" onClick={handleClose} color="primary">
								ویرایش سبد
							</button>
						</DialogActions>
					</Dialog>

					<h5>تعداد کالاها در سبد شما : {props.productsInCart.toLocaleString('ar-EG')}</h5>
					<h5>قیمت کل : {props.cartPrice.toLocaleString('ar-EG')} تومان</h5>
				</div>
			</div>
		</motion.div>
	);
}

const mapState = (state) => {
	return {
		cartPrice: state.cartPrice,
		productsInCart: state.productsInCart,
		cartProducts: state.cartProducts,
		products: state.products,
		productInCart: state.productInCart,
		numbers: state.numbers,
		isDiscount: state.isDiscount
	};
};

const mapDis = (dispatch) => {
	return {
		quantity: (type, id) => dispatch(quantity(type, id)),
		remove: (id) => dispatch(remove(id)),
		discount: () => dispatch(discount())
	};
};

export default connect(mapState, mapDis)(Cart);
