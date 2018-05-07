"use strict";

import Vue from "vue";
import Modal from "./components/modal";
// import {get} from "./util/ajax.js";
import {checkMobile} from "./util/tool";

// --------------------------
// 登录界面视图
let loginVM = new Vue({
	el: "#loginPage",
	components: {
		modal: Modal
	},
	data: {
		form: {
			username: "",								// 账号
			password: ""								// 密码
		},
		inputFocus: {
			nameInput: false,							// 用于判断账号输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
			pwdInput: false								// 用于判断密码输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
		},
		showTip: {
			showNameTip: false,							// 用于判断账号提示文字是否显示(true: 显示; false: 不显示)
			showPwdTip: false							// 用于判断密码提示文字是否显示(true: 显示; false: 不显示)
		},
		validateText: {
			nameTipText: "",							// 账号提示文字
			pwdTipText: ""								// 密码提示文字
		}
	},
	methods: {
		// 输入框失去焦点事件
		validateInput (event) {
			let className = event.target.className;
			let {username, password} = this.form;
			className = className.split(" ")[1];

			switch (className) {
			case "username":
				this.validateName(username);
				break;
			case "password":
				this.validatePwd(password);
				break;
			}
		},
		// 账号输入框
		validateName (username) {
			if (["", undefined, null].includes(username)) {
				this.inputFocus["nameInput"] = false;
				this.showTip["showNameTip"] = true;
				this.validateText["nameTipText"] = "您还没有输入账户名";
				return false;
			}
			this.inputFocus["nameInput"] = false;
			this.showTip["showNameTip"] = false;
		},
		// 密码输入框
		validatePwd (password) {
			if (["", undefined, null].includes(password)) {
				this.inputFocus["pwdInput"] = false;
				this.showTip["showPwdTip"] = true;
				this.validateText["pwdTipText"] = "您还没有输入密码";
				return false;
			}
			this.inputFocus["pwdInput"] = false;
			this.showTip["showPwdTip"] = false;
		},
		// 登录按钮点击事件
		async login () {
			let {username, password} = this.form;

			if (["", undefined, null].includes(username)) {
				this.validateName();
				return false;
			}

			if (["", undefined, null].includes(password)) {
				this.validatePwd();
				return false;
			}

			// let url = "http://193.112.8.151:8000/house/detail";
			// let res = await get(url, {id: 123}, null);
			// console.log(res);
		}
	}
});

// --------------------------
// 注册界面视图
let registerVM = new Vue({
	el: "#registerPage",
	data: {
		form: {
			username: "",								// 用户名
			code: "",									// 动态码
			mobile: "",									// 手机号
			password: "",								// 密码
			confirm: ""									// 确认密码
		},
		inputFocus: {
			nameInput: false,							// 用于判断用户名输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
			codeInput: false,							// 用于判断动态码输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
			mobileInput: false,							// 用于判断手机号输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
			pwdInput: false,							// 用于判断密码输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
			confirmInput: false							// 用于判断确认密码输入框是否添加"signLiFocus"类名(true: 有; false: 没有)
		},
		showTip: {
			showNameTip: false,							// 用于判断用户名提示文字是否显示(true: 显示; false: 不显示)
			showCodeTip: false,							// 用于判断动态码提示文字是否显示(true: 显示; false: 不显示)
			showMobileTip: false,						// 用于判断手机号提示文字是否显示(true: 显示; false: 不显示)
			showPwdTip: false,							// 用于判断密码提示文字是否显示(true: 显示; false: 不显示)
			showConfirmTip: false						// 用于判断确认密码提示文字是否显示(true: 显示; false: 不显示)
		},
		validateText: {
			nameTipText: "",							// 用户名提示文字
			codeTipText: "",							// 动态码提示文字
			mobileTipText: "",							// 手机号提示文字
			pwdTipText: "",								// 密码提示文字
			confirmTipText: ""							// 确认密码提示文字
		},
		visible: false,
		canGetCode: false,
		autoLogin: false
	},
	methods: {
		// 获取动态码按钮点击事件
		getCode () {
			if (this.canGetCode === false) return false;
			this.visible = true;
		},
		validateInput (event) {
			let className = event.target.className;
			className = className.split(" ")[1];
			let {username, code, mobile, password, confirm} = this.form;
			switch (className) {
			case "username":
				this.validateName(username);
				break;
			case "code":
				this.validateCode(code);
				break;
			case "mobile":
				this.validateMobile(mobile);
				break;
			case "password":
				this.validatePassword(password);
				break;
			case "confirm":
				this.validateConfirm(confirm);
				break;
			}
		},
		validateName (username) {
			if (["", undefined, null].includes(username)) {
				this.inputFocus["nameInput"] = false;
				this.showTip["showNameTip"] = true;
				this.validateText["nameTipText"] = "请输入用户名";
				return false;
			}
			this.inputFocus["nameInput"] = false;
			this.showTip["showNameTip"] = false;
		},
		validateCode (code) {
			if (["", undefined, null].includes(code)) {
				this.inputFocus["codeInput"] = false;
				this.showTip["showCodeTip"] = true;
				this.validateText["codeTipText"] = "请填写正确的手机动态码";
				return false;
			}
			this.inputFocus["codeInput"] = false;
			this.showTip["showCodeTip"] = false;
		},
		validateMobile (mobile) {
			if (["", undefined, null].includes(mobile)) {
				this.inputFocus["mobileInput"] = false;
				this.showTip["showMobileTip"] = true;
				this.validateText["mobileTipText"] = "请填写正确的手机号";
				return false;
			}
			this.inputFocus["mobileInput"] = false;
			this.showTip["showMobileTip"] = false;
		},
		validatePassword (password) {
			if (["", undefined, null].includes(password)) {
				this.inputFocus["pwdInput"] = false;
				this.showTip["showPwdTip"] = true;
				this.validateText["pwdTipText"] = "请输入密码";
				return false;
			}
			this.inputFocus["pwdInput"] = false;
			this.showTip["showPwdTip"] = false;
		},
		validateConfirm (confirm) {
			if (["", undefined, null].includes(confirm)) {
				this.inputFocus["confirmInput"] = false;
				this.showTip["showConfirmTip"] = true;
				this.validateText["confirmTipText"] = "请再次输入密码";
				return false;
			}
			this.inputFocus["confirmInput"] = false;
			this.showTip["showConfirmTip"] = false;
		},
		// 判断获取动态码按钮是否可以点击
		getMobileValue (event) {
			let value = event.target.value;
			this.canGetCode = checkMobile(value) ? !!true : !!false;
		},
		register () {}
	}
});

console.log(loginVM);
console.log(registerVM);
// console.log(tool);
