function logError(msg, method = 'log') {
	let prefix = 'trapperKeeper: '
	if (msg) {
		console[method](prefix + msg);
	}
};

export {
	logError
};