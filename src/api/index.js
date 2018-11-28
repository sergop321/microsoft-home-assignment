// @flow

import config from '../config';


const _logError = function _logError(err) {
	console.log(err);
};

const _handleApiResponse = function _handleApiResponse(response) {
	if (response.status !== 200) {
		return Promise.reject(response.status);
	}

	return response.json();
};

const _defaultErrorHandle = function _defaultErrorHandle(err) {
	_logError(err);

	return Promise.reject(err);
};

const _buildApiRequest = function _buildApiRequest(req: string): string {
	return `${config.api.url}?${req}&apikey=${config.api.key}`;
};

const executeApiCall = function _executeApiCall(req: string): Promise<any> {
	return fetch(_buildApiRequest(req))
		.then(_handleApiResponse)
		.catch(_defaultErrorHandle);
};

export {
	executeApiCall,
};