"use strict";

import Vue from "vue";
import Modal from "./components/modal";
import Topbar from "./components/topbar";
import {toast} from "./util/tool";

let personVM = new Vue({
	el: "#personPage",
	components: {
		modal: Modal,
		topbar: Topbar
	},
	data: {
		username: "哈哈哈",					// 用户名
		nickname: "昵称",					// 昵称
		mobile: "13686095822",				// 手机号码
		canEditNickname: false,				// 用于判断昵称输入框是否可以编辑(true: 可以编辑; false: 禁止编辑)
		canEditMobile: false,				// 用于判断手机输入框是否可以编辑(true: 可以编辑; false: 禁止编辑)
		firstClick: false,					// 用于昵称输入框
		tipText: "昵称格式不正确",			// 提示弹框内的文字
		visible: true						// 用于判断是否显示提示弹框(true: 显示; false: 隐藏)
	},
	computed: {
		// 手机号码中间数字隐藏
		regMobile () {
			return this.mobile.substr(0, 3) + "****" + this.mobile.substr(7);
		}
	},
	methods: {
		// 昵称修改按钮点击事件
		editNickname () {
			let nickname = this.nickname;
			if (["", undefined, null].includes(nickname)) {
				this.visible = true;
				return false;
			}
			if (this.firstClick === false) {
				this.canEditNickname = true;
				this.firstClick = true;
			} else {
				toast("修改成功");
				this.canEditNickname = false;
				this.firstClick = false;
			}
		},
		// 昵称修改按钮blur事件
		validateInput (event) {
			let value = event.target.value;
			if (["", undefined, null].includes(value)) {
				this.visible = true;
			}
		},
		// 手机修改按钮点击事件
		editMobile () {
			this.canEditMobile = !this.canEditMobile;
		}
	}
});

console.log(personVM);
