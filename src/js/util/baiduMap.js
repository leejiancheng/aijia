"use strict";

const BaiduMap = {
	init () {
		const AK = "qUEDVTptHjxQBA9Tn1Yd8t034HtZal8I";
		const version = "3.0";
		const mapURL = `http://api.map.baidu.com/api?v=${version}&ak=${AK}&callback=onBMapCallback`;
		return new Promise((resolve, reject) => {
			if (typeof BMap !== "undefined") {
				// eslint-disable-next-line
				resolve(BMap);
				return true;
			}
			window.onBMapCallback = () => {
				// eslint-disable-next-line
				resolve(BMap);
			};
			let script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", mapURL);
			document.body.appendChild(script);
		});
	}
};

export default BaiduMap;
