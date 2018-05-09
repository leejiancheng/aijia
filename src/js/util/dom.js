"use strict";

// 事件绑定
const on = () => {
	if (document.addEventListener) {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.addEventListener(event, handler, false);
			}
		};
	} else {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.attachEvent(`on-${event}`, handler);
			}
		};
	}
};

// 事件解绑
const off = () => {
	if (document.addEventListener) {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.removeEventListener(event, handler, false);
			}
		};
	} else {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.detachEvent(`on-${event}`, handler);
			}
		};
	}
};

// const oneOf = (value, validList) => {
// 	for (let i = 0; i < validList.length; i++) {
// 		if (value === validList[i]) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

// 删除空格
const trim = (string) => {
	return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};

// 判断是否有类名
const hasClass = (el, cls) => {
	if (!el || !cls) return false;
	if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");
	if (el.classList) {
		return el.classList.contains(cls);
	} else {
		return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
	}
};

// 添加类名
const addClass = (el, cls) => {
	if (!el) return;
	let curClass = el.className;
	const classes = (cls || "").split(" ");

	for (let i = 0; i < classes.length; i++) {
		const clsName = classes[i];
		if (!clsName) continue;
		if (el.classList) {
			el.classList.add(clsName);
		} else {
			if (!hasClass(el, clsName)) {
				curClass += " " + clsName;
			}
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
};

const removeClass = (el, cls) => {
	if (!el || !cls) return;
	const classes = cls.split(" ");
	let curClass = " " + el.className + " ";
	for (let i = 0; i < classes.length; i++) {
		const clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else {
			if (hasClass(el, clsName)) {
				curClass = curClass.replace(" " + clsName + " ", " ");
			}
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
};

module.exports = {
	on,
	off,
	trim,
	hasClass,
	addClass,
	removeClass
};
