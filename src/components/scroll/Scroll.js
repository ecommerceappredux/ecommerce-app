import React, { useState, useEffect } from 'react';
import './Scroll.scss';

import { animateScroll as scroll } from 'react-scroll';

import IconButton from '@material-ui/core/IconButton';

import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

import { motion } from 'framer-motion';

function Scroll() {
	const [ shouldShow, setShouldShow ] = useState(false);
	const [ lastYPos, setLastYPos ] = useState(0);
	useEffect(
		() => {
			function handleScroll() {
				const yPos = window.scrollY;
				const scrollingUp = yPos > lastYPos;
				setShouldShow(scrollingUp);
				setLastYPos(yPos);
			}

			window.addEventListener('scroll', handleScroll, false);
			return () => {
				window.removeEventListener('scroll', handleScroll, false);
			};
		},
		[ lastYPos ]
	);

	return (
		<motion.div
			onClick={() => {
				scroll.scrollToTop();
			}}
			animate={{ opacity: shouldShow ? 1 : 0 }}
			initial={{ opacity: 0 }}
			transition={{ opacity: { duration: 0.3 } }}
		>
			<IconButton className="cart__button">
				<ExpandLessRoundedIcon fontSize="large" className="scroll" color="disabled" />
			</IconButton>
		</motion.div>
	);
}

export default Scroll;
