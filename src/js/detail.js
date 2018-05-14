"use strict";

import Vue from "vue";
import Topbar from "./components/topbar";
import {getScroll} from "./util/scroll";
import {search} from "data/index";
import {picList} from "data/detail";

// --------------------------
// 房源详情视图
let detailVM = new Vue({
	el: "#detailPage",
	components: {
		topbar: Topbar
	},
	data: {
		searchword: "",								// 搜索框内容
		searchList: [],								// 用于保存搜索结果列表的数据
		showSearch: false,							// 用于判定是否显示搜索结果(true: 显示; false: 不显示)
		picList: picList,
		nowBanNumber: 0,
		showMobile: false,
		showFixedNav: false,						// 用于判断搜索栏是否置顶(true: 置顶; false: 不置顶)
		visible: false								// 用于判断是否展示图片
	},
	computed: {
		picListWidth () {
			return 131 * this.picList.length;
		},
		picListLeft () {
			let left = 0;
			let number = this.nowBanNumber;
			let length = this.picList.length;
			if (number >= 2 && number < length - 1) {
				left = -131 * (number - 2);
			} else if (number === length - 1) {
				left = -131 * (number - 3);
			}
			return left;
		}
	},
	methods: {
		// 搜索输入框input事件
		inputSearch (event) {
			let value = event.target.value;
			if (["", undefined, null].includes(value)) {
				this.searchList = [];
				this.showSearch = false;
				return false;
			}
			this.searchList = search.data;
			this.showSearch = true;
		},
		// 搜索结果列表点击事件
		goToList (item) {
			console.log(item);
			location.href = "./list.html";
			this.showSearch = false;
		},
		// 搜索按钮点击事件
		onSearch () {
			location.href = "./list.html";
			this.showSearch = false;
		},
		// 搜索输入框blur事件
		hideSearch (event) {},
		showLayer () {
			this.visible = true;
		},
		prePic () {
			let number = +this.nowBanNumber;
			let length = this.picList.length;
			number = number - 1;
			if (number < 0) {
				number = length - 1;
			}
			this.nowBanNumber = number;
		},
		nextPic () {
			let number = +this.nowBanNumber;
			let length = this.picList.length;
			number = number + 1;
			if (number > length - 1) {
				number = 0;
			}
			this.nowBanNumber = number;
		},
		selectNowBanner1 (index) {
			this.nowBanNumber = +index;
		},
		selectNowBanner2 (index) {
			this.visible = true;
			this.nowBanNumber = +index;
		},
		handleScroll () {
			const scrollTop = getScroll(window, true);
			this.showFixedNav = scrollTop > 800 ? !!true : !!false;
		},
		initialize () {
			console.log(123);
		}
	},
	mounted () {
		window.addEventListener("scroll", this.handleScroll, false);
		let ele = document.createElement("script");
		ele.src = "http://api.map.baidu.com/api?v=2.0&ak=qUEDVTptHjxQBA9Tn1Yd8t034HtZal8I&callback=initialize";
		document.body.appendChild(ele);
	}
});

console.log(detailVM);
