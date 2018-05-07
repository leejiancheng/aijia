"use strict";

import $ from "../3rd/jquery.min";

const ajax = (url, method, data, jsonpCallback, options) => {
	if (["", undefined, null].includes(method)) {
		method = "GET";
	}

	return new Promise((resolve, reject) => {
		let ajaxConfig = {
			url,
			data,
			"async": true,
			cache: true,
			xhrFields: {
				withCredentials: true
			},
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			timeout: 60 * 1000
		};

		if (method.toLowerCase() !== "jsonp") {
			// GET, POST
			ajaxConfig.type = method;
		} else {
			// JSONP
			ajaxConfig.dataType = "jsonp";
			ajaxConfig.scriptCharset = "UTF-8";

			if (typeof jsonpCallback === "function") {
				ajaxConfig.jsonp = jsonpCallback;
			}
		}

		if (options) {
			Object.entries(options).forEach(([key, val]) => {
				ajaxConfig[key] = val;
			});
		}

		$.ajax(ajaxConfig)
			.done((data, textStatus, jqXHR) => {
				resolve({
					status: textStatus,
					xhr: jqXHR,
					text: jqXHR.responseText || jqXHR.responseJSON || data
				});
			})
			.fail((jqXHR, textStatus, errorThrown) => {
				resolve({
					error: errorThrown,
					status: textStatus,
					xhr: jqXHR,
					text: jqXHR.responseText || jqXHR.responseJSON
				});
			});
	});
};

const get = (url, params, options) => {
	return ajax(url, undefined, params, undefined, options);
};

const post = (url, params, options) => {
	return ajax(url, "POST", params, undefined, options);
};

// const jsonp = (url, jsonpCallback, options) => {
// 	return ajax(url, "jsonp", undefined, jsonpCallback, options)
// };

export {get, post};
