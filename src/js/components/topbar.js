"use strict";

import Vue from "vue";
import {Base64} from "@/js/3rd/base64";
import {getCookie, clearCookie} from "@/js/util/tool";

let template = `
	<div class="topBar">
        <div class="topBarContainer clearfix">
            <div class="barLeft fl">
                <h2>深圳</h2>
                <a href="./index.html" class="homeLink">
                    <i class="icon"></i>58首页</a>
            </div>
            <div class="barRight fr">
                <div class="topBarLogin rightItem">
                	<template v-if="showUsername">
						<span class="userName">{{username}}</span>
						<a href="javascript:void(0);" class="myText" @click="logout">退出</a>
					</template>
					<template v-else>
						<a href="./login.html" class="myText">登录</a>
						/
						<a href="./register.html" class="myText">注册</a>
					</template>
                </div>
                <div class="topBarMymenu rightItem">
                    <a href="./person.html" class="myText">个人中心</a>
                    <span class="arrow"></span>
                    <div class="dropMenu">
                        <a href="./person.html" class="dropMenuItem">账户设置</a>
                    </div>
                </div>
                <div class="topBarVip rightItem">
                    <a href="javascript:void(0);" class="myText">商家中心</a>
                    <span class="arrow"></span>
                </div>
                <div class="topBarHelp rightItem">
                    <a href="javascript:void(0);" class="myText">联系客服</a>
                    <span class="arrow"></span>
                </div>
                <div class="topBarMyfeet rightItem">
                    <a href="javascript:void(0);" class="myText">最近浏览</a>
                    <span class="arrow"></span>
                </div>
                <div class="topBarSitemap rightItem">
                    <a href="javascript:void(0);" class="myText">网站导航</a>
                    <span class="arrow"></span>
                </div>
            </div>
        </div>
    </div>
`;

let topBarComponent = Vue.component("topbar", {
	name: "topbar",
	template: template,
	props: {},
	data () {
		return {
			showUsername: false,
			username: ""
		};
	},
	methods: {
		initData () {
			let cValue = getCookie("username") || "";
			let decode = Base64.decode(cValue);
			if (["", undefined, null].includes(decode)) {
				this.showUsername = false;
				return false;
			}
			this.showUsername = true;
			this.username = decode;
			console.log(decode);
		},
		logout () {
			clearCookie("username");
			this.showUsername = false;
			this.username = "";
		}
	},
	mounted () {
		this.initData();
	}
});

export default topBarComponent;
