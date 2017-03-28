// Config
import errors from "./config/errors";

// Utils
import { logError } from "./utils/errorUtils";

let trapperKeeper = function() {

	let storeCollection = new Map();

	function set(...params) {
		if (params.length !== 2) {
			logError(errors.noKeySet);
			return;
		}
		let key = params[0],
			vals = params[1],
			store = ensureStore(key);

		for (var prop in vals) {
			store.set(prop, vals[prop]);
		}
	};

	function ensureStore(key) {
		let store = storeCollection.get(key);
		return typeof store !== 'undefined' ? store : createStore(key);

	};

	function createStore(key, rootStore = storeCollection) {
		let store = new Map();
		rootStore.set(key, store);
		return rootStore.get(key);
	};

	function get(...params) {
		if (params.length === 2) {
			let store = storeCollection.get(params[0]);
			return store.get(params[1]);
		} else if (params.length === 1) {
			return storeCollection.get(params[0]);
		} else {
			return storeCollection;
		}		
	};

	return {
		set: set,
		get: get
	};

};

let instance = trapperKeeper();

export default instance;