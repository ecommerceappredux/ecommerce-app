import React from 'react';
import '../../header/Sidenav.scss';
function SidenavInfo() {
	return (
		<div>
			<div className="sidenav__info d-flex justify-content-center flex-column align-items-center">
				<div className="logo sidenav__logo">
					<img alt="logo" className="logo__img" src={require('../../../assets/img/logo.png')} />
				</div>
				<div>
					<p className="m-0 text-bold text-center">خرید آسان با بافردو</p>
					<p className="m-0 mt-2 text-center">۲۰۲۰</p>
				</div>
			</div>
		</div>
	);
}

export default SidenavInfo;
