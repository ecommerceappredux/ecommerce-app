import {
	BUY_ITEM,
	SUBCATEGORY,
	CATEGORY,
	PRODUCT,
	RELATED,
	OFF,
	GETCART,
	INCREASE,
	DECREASE,
	REMOVE,
	DISCOUNT
} from './mainTypes';

export const buyItem = (item) => {
	return {
		type: BUY_ITEM,
		payload: item
	};
};

export const getproduct = (id) => {
	return {
		type: PRODUCT,
		payload: id
	};
};

export const related = (category, id) => {
	return {
		type: RELATED,
		payload: category,
		id: id
	};
};

export const off = () => {
	return {
		type: OFF
	};
};
export const discount = () => {
	return {
		type: DISCOUNT
	};
};
// export const getCart = () => {
// 	return {
// 		type: GETCART
// 	};
// };

export const quantity = (type, id) => {
	return {
		type: type === 'inc' ? INCREASE : DECREASE,
		payload: id
	};
};

export const remove = (id) => {
	return {
		type: REMOVE,
		payload: id
	};
};
