'use strict';

let remoteError = (prompt, error) => {
	if (error && error.response && error.response.data) {
		console.error(prompt + " " + error.response.data);
		return;
	}
	if (error) {
		console.error(prompt + " " + error);
		return;
	}
	console.error(prompt + " (null error object)");
}

module.exports = {
	remoteError: remoteError
}
