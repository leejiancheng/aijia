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
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			timeout: 60 * 1000
			// beforeSend: function (xhr) {
			// 	xhr.setRequestHeader("Authorization", "APPCODE 6b2a6481e0254e8c95caa99d298823ba");
			// }
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
		console.log(ajaxConfig);
		$.ajax(ajaxConfig)
			.done((res) => {
				resolve(res);
			})
			.fail((err) => {
				resolve(err);
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
