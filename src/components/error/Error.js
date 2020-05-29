import React from 'react';
import { NavLink } from 'react-router-dom';

function Error() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '2em',
				fontFamily: 'Vazir, sans-serif'
			}}
		>
			<h2 className="pb-2">این صفحه وجود ندارد</h2>

			<NavLink style={{ margin: '10px 0', padding: '5px', textDecoration: 'none', color: 'gray' }} to="/">
				صفحه اصلی
			</NavLink>
			<NavLink
				style={{ margin: '10px 0', padding: '5px', textDecoration: 'none', color: 'gray' }}
				to="/categories/electronics"
			>
				محصولات الکترونیکی
			</NavLink>
			<NavLink
				style={{ margin: '10px 0', padding: '5px', textDecoration: 'none', color: 'gray' }}
				to="/categories/outfit"
			>
				لوازم شخصی
			</NavLink>
		</div>
	);
}

export default Error;
