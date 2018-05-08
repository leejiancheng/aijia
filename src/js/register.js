"use strict";

import Vue from "vue";
import {isMobile} from "./util/tool";
import Modal from "./components/modal";
// import {get} from "./util/ajax.js";

// --------------------------
// 注册界面视图
let registerVM = new Vue({
	el: "#registerPage",
	components: {
		modal: Modal
	},
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
		btnText: "获取动态码",							// 获取动态码按钮文字
		visible: false,									// 用于判断图片验证码模态框是否显示(true: 显示; false: 隐藏)
		canGetCode: false								// 用于判断获取动态码按钮是否可以点击(true: 可以点击; false: 禁用)
	},
	methods: {
		// 获取动态码按钮点击事件
		getCode () {
			if (this.canGetCode === false) return false;
			this.visible = true;
		},
		// 输入框失去焦点事件
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
		// 验证用户名
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
		// 验证动态码
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
		// 验证手机号码
		validateMobile (mobile) {
			if (["", undefined, null].includes(mobile) || !isMobile(mobile)) {
				this.inputFocus["mobileInput"] = false;
				this.showTip["showMobileTip"] = true;
				this.validateText["mobileTipText"] = "请填写正确的手机号";
				return false;
			}
			this.inputFocus["mobileInput"] = false;
			this.showTip["showMobileTip"] = false;
		},
		// 验证密码
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
		// 验证再次输入密码
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
			this.canGetCode = isMobile(value) ? !!true : !!false;
			console.log(this.canGetCode);
		},
		// 注册按钮点击事件
		register () {}
	}
});

console.log(registerVM);
// console.log(tool);
