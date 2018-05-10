"use strict";

import Vue from "vue";
import {Base64} from "./3rd/base64";
import {setCookie} from "./util/tool";
// import {get} from "./util/ajax2.js";

// --------------------------
// 登录界面视图
let loginVM = new Vue({
	el: "#loginPage",
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
			return true;
		},
		// 密码输入框
		validatePwd (password) {
			if (["", undefined, null].includes(password)) {
				this.inputFocus["pwdInput"] = false;
				this.showTip["showPwdTip"] = true;
				this.validateText["pwdTipText"] = "您还没有输入密码";
				return false;
			}
			if (password.length <= 6) {
				this.inputFocus["pwdInput"] = false;
				this.showTip["showPwdTip"] = true;
				this.validateText["pwdTipText"] = "密码太短，最少为6位";
				return false;
			}
			this.inputFocus["pwdInput"] = false;
			this.showTip["showPwdTip"] = false;
			return true;
		},
		// 登录按钮点击事件
		async login () {
			let {username, password} = this.form;

			if (["", undefined, null].includes(username)) {
				this.validateName(username);
				return false;
			}

			if (["", undefined, null].includes(password)) {
				this.validatePwd(password);
				return false;
			}

			// let url = "/api/toutiao/index";
			// let res = await get(url);
			// console.log(res);
			let encode = Base64.encode(username);
			setCookie("username", encode);
			location.href = "./index.html";
		}
	}
});

console.log(loginVM);
