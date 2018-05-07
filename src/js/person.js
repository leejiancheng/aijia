"use strict";

import Vue from "vue";
import Modal from "./components/modal";
import {toast} from "./util/tool";

let personVM = new Vue({
	el: "#personPage",
	components: {
		modal: Modal
	},
	data: {
		username: "哈哈哈",
		nickname: "昵称",
		mobile: "13686095822",
		canEditNickname: false,
		canEditMobile: false,
		firstClick: false,
		tipText: "昵称格式不正确",
		visible: false
	},
	computed: {
		regMobile () {
			return this.mobile.substr(0, 3) + "****" + this.mobile.substr(7);
		}
	},
	methods: {
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
		validateInput (event) {
			let value = event.target.value;
			if (["", undefined, null].includes(value)) {
				this.visible = true;
			}
		},
		editMobile () {
			this.canEditMobile = !this.canEditMobile;
		}
	}
});

console.log(personVM);
