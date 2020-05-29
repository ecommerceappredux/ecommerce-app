import React, { useState } from 'react';
import clsx from 'clsx';
import './Sidenav.scss';
import { NavLink } from 'react-router-dom';

import SidenavInfo from './Sidenav/SidenavInfo';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Button } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

//sidenav width and styles
const useStyles = makeStyles({
	list: {
		width: 200
	},
	fullList: {
		width: 'auto'
	}
});

function Sidenav() {
	const [ open, setOpen ] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	// Functionality for sidenav
	const classes = useStyles();
	const [ state, setState ] = useState({
		right: false
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			dir="rtl"
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom'
			})}
			role="presentation"
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<p className="sidenav__catmain">لوازم الکترونیکی</p>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<ButtonGroup
							orientation="vertical"
							aria-label="vertical contained primary button group"
							variant="text"
							className="sidenav__cat"
						>
							<NavLink
								className="navlink"
								activeClassName="navlink-active"
								to="/categories/electronics/mobile"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">موبایل</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/phone.png')}
									/>
								</Button>
							</NavLink>
							<NavLink
								className="navlink"
								activeClassName="navlink-active"
								to="/categories/electronics/tablet"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">تبلت</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/tablet.png')}
									/>
								</Button>
							</NavLink>
							<NavLink
								className="navlink"
								activeClassName="navlink-active"
								to="/categories/electronics/laptop"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">رایانه</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/computer.png')}
									/>
								</Button>
							</NavLink>
							<NavLink
								className="navlink"
								activeClassName="navlink-active"
								to="/categories/electronics/game"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className=" sidenav__cat-btn sidenav ml-auto mr-2">گیمینگ کنسول</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/xbox.png')}
									/>
								</Button>
							</NavLink>
							<NavLink
								exact={true}
								className="navlink"
								activeClassName="navlink-active"
								to="/categories/electronics"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">همه ی محصولات</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/indent.png')}
									/>
								</Button>
							</NavLink>
						</ButtonGroup>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</List>
			<List>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<p className="sidenav__catmain">وسایل شخصی</p>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<ButtonGroup
							orientation="vertical"
							aria-label="vertical contained primary button group"
							variant="text"
							className="sidenav__cat"
						>
							<NavLink
								to="/categories/outfit/clothes"
								activeClassName="navlink-active"
								className="navlink"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">لباس</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/shirt.png')}
									/>
								</Button>
							</NavLink>

							<NavLink to="/categories/outfit/shoes" activeClassName="navlink-active" className="navlink">
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">کفش</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/shoe.png')}
									/>
								</Button>
							</NavLink>
							<NavLink to="/categories/outfit/bag" activeClassName="navlink-active" className="navlink">
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">کیف</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/purse.png')}
									/>
								</Button>
							</NavLink>
							<NavLink
								exact={true}
								to="/categories/outfit"
								activeClassName="navlink-active"
								className="navlink"
							>
								<Button onClick={toggleDrawer(anchor, false)} className="sidenav">
									<p className="sidenav__cat-btn sidenav ml-auto mr-2">همه ی محصولات</p>
									<img
										alt="img"
										className="sidenav__cat-img"
										src={require('../../assets/img/indent.png')}
									/>
								</Button>
							</NavLink>
						</ButtonGroup>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</List>
		</div>
	);

	return (
		<div>
			<button className="hamburger-menu" onClick={toggleDrawer('right', true)}>
				<MenuRoundedIcon color="disabled" />
			</button>
			<Drawer className="sidenav" anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
				<div className="d-flex justify-content-center">
					<div className="logo sidenav__logo">
						<img alt="logo" className="logo__img" src={require('../../assets/img/logo.png')} />
					</div>
				</div>
				<p className="text-center sidenav mt-1 sidenav__logo-text">فروشگاه اینترنتی بافردو</p>
				<div className="line" />
				{list('right')}
				<div className="line" />

				<Button className="sidenav sidenav__about" onClick={handleClickOpen}>
					<img alt="img" className="sidenav__about-img mb-1" src={require('../../assets/img/plus.svg')} />
					<p className="sidenav ml-auto mr-3 mt-2">درباره</p>
				</Button>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle className="text-right sidenav" id="alert-dialog-title">
						<p className="sidenav p-0 m-0">درباره ی اپلیکیشن</p>
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<p className="text-right sidenav">
								وب اپلیکیشن ایکامرس بافردو توسط مهدی فرجی طراحی و توسعه یافته و نمونه ای از فروشگاه های
								اینترنتی هست همچنین جهت ارتباط با دولوپر از لینک های زیر در تماس باشین ممنون بابت وقتتون
							</p>
							<div className="d-flex justify-content-around">
								<div>
									<a
										className="sidenav__about-link sidenav"
										target="_blank"
										rel="noopener noreferrer"
										href="mailto:mahdifarajideveloper@gmail.com?subject=فروشگاه اینترنتی بافردو "
									>
										<IconButton className="cart__button">
											<div className="d-flex flex-column justify-content-center align-items-center">
												<MailRoundedIcon />

												<p className="sidenav__about-link-text">ایمیل </p>
											</div>
										</IconButton>
									</a>
								</div>
								<div>
									<a
										className="sidenav__about-link sidenav"
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/mehdi-developer"
									>
										<IconButton className="cart__button">
											<div className="d-flex flex-column justify-content-center align-items-center">
												<img
													alt="img"
													className="sidenav__about-icon"
													src={require('../../assets/img/github.png')}
												/>
												<p className="sidenav__about-link-text">گیتهاب </p>
											</div>
										</IconButton>
									</a>
								</div>
								<div>
									<a
										className="sidenav__about-link sidenav"
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/mahdifaraij/"
									>
										<IconButton className="cart__button">
											<div className="d-flex flex-column justify-content-center align-items-center">
												<img
													alt="img"
													className="sidenav__about-icon"
													src={require('../../assets/img/linkedin.png')}
												/>
												<p className="sidenav__about-link-text">لینکدن </p>
											</div>
										</IconButton>
									</a>
								</div>
							</div>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button className="sidenav__about-close" onClick={handleClose}>
							<p className="sidenav p-0 m-0">اوکی</p>
						</Button>
					</DialogActions>
				</Dialog>

				<div className="line" />

				<SidenavInfo />
			</Drawer>
		</div>
	);
}

export default Sidenav;
