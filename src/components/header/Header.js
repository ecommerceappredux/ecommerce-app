import React from 'react';

import './Header.scss';
import Sidenav from './Sidenav';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';

import { buyItem } from '../../redux/mainActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<div className="header">
			<div className="d-flex justify-content-between align-items-center ml-4 mr-4 h-100 ">
				<div>
					<NavLink to="/cart">
						<IconButton className="cart__button">
							<Badge showZero={true} badgeContent={props.productsInCart} color="secondary">
								<LocalMallRoundedIcon color="disabled" />
							</Badge>
						</IconButton>
					</NavLink>
				</div>

				<div className="header--desktop align-items-center h-100">
					{/* <div onClick={searchFocus} className="d-flex searchbar align-items-center">
						<input
							ref={inputRef}
							dir="rtl"
							className="header__search--desktop"
							type="text"
							placeholder="جستجوی کالا..."
						/>
						<IconButton className="search-icon-btn">
							<img className="search-icon" src={require('../../assets/img/search.png')} alt="search" />
						</IconButton>
					</div> */}

					<div className="logo">
						<NavLink to="/">
							<img alt="logo" className="logo__img" src={require('../../assets/img/logo.png')} />
						</NavLink>
					</div>

					<div>
						<Sidenav />
					</div>
				</div>

				<div className="header--mobile">
					<div className="logo">
						<NavLink to="/">
							<img alt="logo" className="logo__img" src={require('../../assets/img/logo.png')} />
						</NavLink>
					</div>
				</div>

				<div className="header--mobile">
					<Sidenav />
				</div>
			</div>
			{/* <div dir="rtl" className="header__search--mobile">
				<div className="search__mobile-container d-flex align-items-center">
					<IconButton className="search-icon-btn mr-2">
						<img className="search-icon" src={require('../../assets/img/search.png')} alt="search" />
					</IconButton>
					<input className="search__mobile" type="text" placeholder="جستجوی کالا..." />
				</div>
			</div> */}
		</div>
	);
}

const mapState = (state) => {
	return {
		productsInCart: state.productsInCart
	};
};

const mapDis = (dispatch) => {
	return {
		buyItem: () => dispatch(buyItem())
	};
};

export default connect(mapState, mapDis)(Header);
