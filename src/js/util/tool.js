"use strict";

const getAllParam = () => {
	let json = {};
	let param = decodeURIComponent(window.location.search.substr(1));
	param.replace(/([^&*]+)=([^&*]+)/gi, (a, b, c) => {
		json[b] = c;
	});
	return json;
};

const getParam = (name) => {
	return getAllParam()[name];
};

const setCookie = (name, value, path, exdays) => {
	let cookie = `${name}=${value}`;
	if (path !== undefined) {
		cookie += `; path=${path}`;
	}
	if (exdays !== undefined) {
		let d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		let expires = `expires=${d.toUTCString()}`;
		cookie += `; ${expires}`;
	}
	document.cookie = cookie;
};

const getCookie = (name) => {
	let strCookie = document.cookie;
	let arrCookie = strCookie.split("; ");
	for (let i = 0; i < arrCookie.length; i++) {
		let arr = arrCookie[i].split("=");
		if (name === arr[0]) {
			return arr[1];
		}
	}
	return "";
};

const clearCookie = (name) => {
	setCookie(name, "", "", -1);
};

const setLocal = (key, val, exp) => {
	key = typeof (key) === "string" ? key : JSON.string(key);
	val = typeof (val) === "string" ? val : JSON.string(val);

	const now = Date.parse(new Date()) / 1000;
	const end = now + exp;

	localStorage.setItem(key, val);
	if (exp) localStorage.setItem(`${key}_exp`, end);
};

const getLocal = (key) => {
	const val = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
	const now = Date.parse(new Date()) / 1000;
	const exp = localStorage.getItem(`${key}_exp`);

	if (exp && (exp - now > 0)) {
		return val;
	} else {
		localStorage.removeItem(key);
		return undefined;
	}
};

const setSession = (key, val, exp) => {
	key = typeof (key) === "string" ? key : JSON.string(key);
	val = typeof (val) === "string" ? val : JSON.string(val);

	const now = Date.parse(new Date()) / 1000;
	const end = now + exp;

	sessionStorage.setItem(key, val);
	if (exp) sessionStorage.setItem(`${key}_exp`, end);
};

const getSession = (key) => {
	const val = sessionStorage.getItem(key) && JSON.parse(sessionStorage.getItem(key));
	const now = Date.parse(new Date()) / 1000;
	const exp = sessionStorage.getItem(`${key}_exp`);

	if (exp && (exp - now > 0)) {
		return val;
	} else {
		sessionStorage.removeItem(key);
		return undefined;
	}
};

const isEmail = (str) => {
	return new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$").test(str);
};

const isMobile = (str) => {
	return /^[1][3,4,5,7,8][0-9]{9}$/.test(str);
};

const toast = (str) => {
	let oDiv = document.createElement("div");
	oDiv.setAttribute("class", "toast");
	oDiv.setAttribute("style", "position:fixed;z-index:9999;padding:6px 12px;background:rgba(0,0,0,0.7);top:45%;color:#fff;font-size:14px;border-radius:2px;");
	oDiv.innerHTML = str;
	document.body.appendChild(oDiv);
	oDiv.style.left = (document.body.offsetWidth - oDiv.offsetWidth) / 2 + "px";
	setTimeout(() => {
		document.body.removeChild(oDiv);
	}, 2000);
};

const showLoading = () => {
	let oDiv = document.createElement("div");
	oDiv.setAttribute("class", "loading");
	oDiv.setAttribute("id", "loading");
	oDiv.innerHTML = `
		<div class="loading-mask"></div>
		<div class="loading-wrap">
			<div class="loading-dot"></div>
		</div>`;
	document.body.appendChild(oDiv);
};

const hideLoading = () => {
	let oDiv = document.getElementById("loading");
	document.body.removeChild(oDiv);
};

module.exports = {
	getAllParam,
	getParam,
	setCookie,
	getCookie,
	clearCookie,
	setLocal,
	getLocal,
	setSession,
	getSession,
	isEmail,
	isMobile,
	toast,
	showLoading,
	hideLoading
};
