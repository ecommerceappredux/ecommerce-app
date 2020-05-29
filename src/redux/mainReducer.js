import {
	BUY_ITEM,
	CATEGORY,
	SUBCATEGORY,
	PRODUCT,
	RELATED,
	OFF,
	INCREASE,
	DECREASE,
	REMOVE,
	DISCOUNT
} from './mainTypes';

const initialState = {
	productsInCart: 0,
	cartPrice: 0,
	products: [
		{
			id: 1,
			name: 'Ps4 کنسول بازی',
			price: 4500000,
			info: 'پرفروشترین و محبوب ترین کنسول ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'sony',
			subCategory: 'game',
			img: 'ps4',
			stockNumber: 4,
			off: false,
			offPrice: null
		},
		{
			id: 24,
			name: 'Gucci کیف',
			price: 7210000,
			info: 'پرفروشترین و محبوب ترین کیف ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'gucci',
			subCategory: 'bag',
			img: 'gucci-bag',
			stockNumber: 2,
			off: false,
			offPrice: null
		},
		{
			id: 10,
			name: 'Samsung Galaxy A70 گوشی موبایل ',
			price: 5800000,
			info: 'پرفروشترین و محبوب ترین موبایل ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'samsung',
			subCategory: 'mobile',
			img: 'a70',
			stockNumber: 3,
			off: true,
			offPrice: 6000000
		},
		{
			id: 5,
			name: 'Xbox 360 کنسول بازی ',
			price: 1800000,
			info: 'پرفروشترین و محبوب ترین کنسول ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'sony',
			subCategory: 'game',
			img: 'xbox-360',
			stockNumber: 2,
			off: true,
			offPrice: 2200000
		},
		{
			id: 6,
			name: 'iPhone XS MAX 256gb گوشی موبایل ',
			price: 15000000,
			info: 'پرفروشترین و محبوب ترین موبایل ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'apple',
			subCategory: 'mobile',
			img: 'iphone-xs-max',
			stockNumber: 1,
			off: false,
			offPrice: null
		},
		{
			id: 14,
			name: 'Acer لپ تاپ',
			price: 8400000,
			info: 'پرفروشترین و محبوب ترین لپ تاپ ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'acer',
			subCategory: 'laptop',
			img: 'acer',
			stockNumber: 2,
			off: false,
			offPrice: null
		},
		{
			id: 8,
			name: 'iPhone 5s 64gb گوشی موبایل ',
			price: 1100000,
			info: 'پرفروشترین و محبوب ترین موبایل ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'apple',
			subCategory: 'mobile',
			img: 'iphone-5s',
			stockNumber: 8,
			off: true,
			offPrice: 1350000
		},
		{
			id: 11,
			name: 'iPad تبلت',
			price: 5000000,
			info: 'پرفروشترین و محبوب ترین تبلت ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'apple',
			subCategory: 'tablet',
			img: 'ipad',
			stockNumber: 2,
			off: false,
			offPrice: null
		},
		{
			id: 26,
			name: 'Nike کیف',
			price: 340000,
			info: 'پرفروشترین و محبوب ترین کیف ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'nike',
			subCategory: 'bag',
			img: 'nike-bag',
			stockNumber: 2,
			off: true,
			offPrice: 445000
		},
		{
			id: 7,
			name: 'iPhone X 256gb گوشی موبایل ',
			price: 10000000,
			info: 'پرفروشترین و محبوب ترین موبایل ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'apple',
			subCategory: 'mobile',
			img: 'iphone-x',
			stockNumber: 5,
			off: true,
			offPrice: 11500000
		},
		{
			id: 21,
			name: 'Gucci کفش',
			price: 880000,
			info: 'پرفروشترین و محبوب ترین کفش ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'gucci',
			subCategory: 'shoes',
			img: 'gucci-shoes',
			stockNumber: 1,
			off: false,
			offPrice: null
		},
		{
			id: 12,
			name: 'iPad Air 2 تبلت',
			price: 5800000,
			info: 'پرفروشترین و محبوب ترین تبلت ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'apple',
			subCategory: 'tablet',
			img: 'ipad-air',
			stockNumber: 2,
			off: true,
			offPrice: 6200000
		},
		{
			id: 2,
			name: 'Xbox One X کنسول بازی',
			price: 10000000,
			info: 'پرفروشترین و محبوب ترین کنسول ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'microsoft',
			subCategory: 'game',
			img: 'xbox-one-x',
			stockNumber: 4,
			off: false,
			offPrice: null
		},
		{
			id: 15,
			name: 'Apple Macbook Pro لپ تاپ',
			price: 24400000,
			info: 'پرفروشترین و محبوب ترین لپ تاپ ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'apple',
			subCategory: 'laptop',
			img: 'mac',
			stockNumber: 1,
			off: true,
			offPrice: 25000000
		},
		{
			id: 3,
			name: 'PS3 کنسول بازی ',
			price: 1800000,
			info: 'پرفروشترین و محبوب ترین کنسول ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'sony',
			subCategory: 'game',
			img: 'ps3',
			stockNumber: 2,
			off: true,
			offPrice: 2200000
		},
		{
			id: 16,
			name: 'DELL لپ تاپ',
			price: 6400000,
			info: 'پرفروشترین و محبوب ترین لپ تاپ ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'dell',
			subCategory: 'laptop',
			img: 'dell',
			stockNumber: 4,
			off: false,
			offPrice: null
		},
		{
			id: 18,
			name: 'Adidas تیشرت',
			price: 280000,
			info: 'پرفروشترین و محبوب ترین تیشرت ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'adidas',
			subCategory: 'clothes',
			img: 'adidas-shirt',
			stockNumber: 6,
			off: false,
			offPrice: null
		},
		{
			id: 9,
			name: 'Samsung Galaxy A20 گوشی موبایل ',
			price: 2800000,
			info: 'پرفروشترین و محبوب ترین موبایل ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'samsung',
			subCategory: 'mobile',
			img: 'a20',
			stockNumber: 6,
			off: false,
			offPrice: null
		},
		{
			id: 20,
			name: 'Gucci شلوار',
			price: 580000,
			info: 'پرفروشترین و محبوب ترین شلوار ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'gucci',
			subCategory: 'clothes',
			img: 'gucci-pants',
			stockNumber: 2,
			off: false,
			offPrice: null
		},
		{
			id: 13,
			name: 'Samsung Galaxy Tab S تبلت',
			price: 4400000,
			info: 'پرفروشترین و محبوب ترین تبلت ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'electronics',
			brand: 'samsung',
			subCategory: 'tablet',
			img: 'tab-s',
			stockNumber: 4,
			off: false,
			offPrice: null
		},
		{
			id: 17,
			name: 'Polo تیشرت',
			price: 240000,
			info: 'پرفروشترین و محبوب ترین تیشرت ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'polo',
			subCategory: 'clothes',
			img: 'polo-shirt',
			stockNumber: 3,
			off: true,
			offPrice: 340000
		},
		{
			id: 19,
			name: 'Gucci پیراهن',
			price: 580000,
			info: 'پرفروشترین و محبوب ترین پیراهن ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'gucci',
			subCategory: 'clothes',
			img: 'gucci-button-shirt',
			stockNumber: 1,
			off: false,
			offPrice: null
		},
		{
			id: 22,
			name: 'Nike کفش',
			price: 1280000,
			info: 'پرفروشترین و محبوب ترین کفش ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'nike',
			subCategory: 'shoes',
			img: 'nike-jordan',
			stockNumber: 1,
			off: false,
			offPrice: null
		},
		{
			id: 23,
			name: 'Adidas YEEZY کفش',
			price: 3210000,
			info: 'پرفروشترین و محبوب ترین کفش ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'adidas',
			subCategory: 'shoes',
			img: 'yeezy',
			stockNumber: 1,
			off: false,
			offPrice: null
		},
		{
			id: 25,
			name: 'Adidas کیف',
			price: 210000,
			info: 'پرفروشترین و محبوب ترین کیف ها همین الان سفارش دهید',
			number: 0,
			inCart: false,
			category: 'outfit',
			brand: 'adidas',
			subCategory: 'bag',
			img: 'adidas-bag',
			stockNumber: 5,
			off: true,
			offPrice: 345000
		}
	],
	filteredProducts: [],
	newProduct: {},
	newProductImg: '',
	offProducts: [],
	cartProducts: [],
	isDiscount: false
};

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ITEM:
			let item = state.products.filter((item) => {
				if (item.id === action.payload) {
					return item;
				}
			});
			return {
				...state,
				productsInCart: state.productsInCart + 1,
				cartPrice: state.cartPrice + item[0].price,
				products: state.products.map((item) => {
					const newItem = { ...item };
					if (item.id === action.payload) {
						newItem.inCart = true;
						newItem.number += 1;
					}
					return newItem;
				})
			};

		case PRODUCT:
			let id = JSON.parse(action.payload);
			let myNewProd = state.products.filter((product) => {
				if (product.id === id) {
					return product;
				}
			});
			return {
				...state,
				newProduct: myNewProd
			};

		case RELATED:
			let relatedProducts = state.products.filter((product) => {
				if (product.category === action.payload && product.id !== action.id) {
					return product;
				}
			});
			return {
				...state,
				filteredProducts: relatedProducts
			};

		case OFF:
			let offProducts = state.products.filter((product) => {
				if (product.off) {
					return product;
				}
			});
			return {
				...state,
				offProducts: offProducts
			};

		case INCREASE:
			let itemm = state.products.filter((item) => {
				if (item.id === action.payload) {
					return item;
				}
			});
			return {
				...state,
				productsInCart: state.productsInCart + 1,
				cartPrice: state.cartPrice + itemm[0].price,
				products: state.products.map((item) => {
					const newItem = { ...item }; // copy item
					if (item.id === action.payload) {
						// update if id matches
						newItem.number += 1;
					}
					return newItem; // return copied item
				})
			};
		case DECREASE:
			let newCost = 0;
			let newProductsInCart = 0;
			return {
				...state,
				products: state.products.map((item) => {
					const newItem = { ...item }; // copy item
					if (item.id === action.payload) {
						if (newItem.number === 0) {
							newItem.number = 0;
							newProductsInCart = state.productsInCart;
							newCost = state.cartPrice;
						} else {
							newItem.number -= 1;
							newCost = state.cartPrice - item.price;
							newProductsInCart = state.productsInCart - 1;
						}
					}
					return newItem; // return copied item
				}),

				productsInCart: newProductsInCart,
				cartPrice: newCost
			};
		case REMOVE:
			let itemmmm = state.products.filter((item) => {
				if (item.id === action.payload) {
					return item;
				}
			});
			return {
				...state,
				cartPrice: state.cartPrice - itemmmm[0].number * itemmmm[0].price,
				productsInCart: state.productsInCart - itemmmm[0].number,
				products: state.products.map((item) => {
					const newItem = { ...item };
					if (item.id === action.payload) {
						newItem.inCart = false;
						newItem.number = 0;
					}
					return newItem;
				})
			};
		case DISCOUNT:
			return {
				...state,
				cartPrice: state.cartPrice - 100000,
				isDiscount: true
			};
		default:
			return state;
	}
};

export default mainReducer;
