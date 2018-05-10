"use strict";
import axios from "axios";
import qs from "qs";
// import NProgress from "nprogress";

axios.interceptors.request.use((config) => {
	return config;
}, (error) => {
	return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
	return response;
}, (error) => {
	// 这里我们把错误信息扶正, 后面就不需要写 catch 了
	return Promise.resolve(error.response);
});

// const checkStatus = (response) => {
// 	// if (response.status === 200 || response.status === 304) {
// 	// 	return response;
// 	// }
// 	// return {
// 	// 	data: {
// 	// 		"code": -404,
// 	// 		"message": response.statusText,
// 	// 		"data": response.statusText
// 	// 	}
// 	// };
// 	return response;
// };

// const checkCode = (res) => {
// 	// if (res.data.code !== 200) {
// 	// 	alert(res.data.message);
// 	// }
// 	return res;
// };

export const get = (url, params) => {
	return axios({
		method: "get",
		url,
		params,
		timeout: 30000,
		headers: {
			"X-Requested-With": "XMLHttpRequest",
			"Content-Type": "application/json; charset=utf-8"
		}
	});
};

export const post = (url, params) => {
	return axios({
		method: "post",
		url,
		data: qs.stringify(params),
		timeout: 30000,
		headers: {
			"X-Requested-With": "XMLHttpRequest",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		}
	});
};
