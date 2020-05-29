import { createStore } from 'redux';
import { mainReducer } from './mainReducer';

function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		sessionStorage.setItem('state', serializedState);
	} catch (e) {
		console.log(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serializedState = sessionStorage.getItem('state');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (e) {
		console.log(e);
		return undefined;
	}
}

const persistedState = loadFromLocalStorage();

const store = createStore(mainReducer, persistedState);

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});

export default store;
