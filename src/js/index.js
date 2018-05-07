"use strict";

import Vue from "vue";
import {search} from "data/index";

// --------------------------
// 首页视图
let indexVM = new Vue({
	el: "#indexPage",
	data: {
		searchword: "",					// 搜索框内容
		searchList: [],					// 用于保存搜索结果列表的数据
		showSearch: false				// 用于判定是否显示搜索结果(true: 显示; false: 不显示)
	},
	methods: {
		// 输入框input事件
		inputSearch (event) {
			let value = event.target.value;
			if (["", undefined, null].includes(value)) {
				this.searchword = "";
				this.searchList = [];
				this.showSearch = false;
				return false;
			}
			this.searchword = value;
			this.searchList = search.data;
			this.showSearch = true;
		},
		// 搜索结果列表点击事件
		goToList (item) {
			console.log(item);
			this.showSearch = false;
		},
		// 搜索按钮点击事件
		onSearch () {},
		hideSearch (event) {
			console.log(event);
		}
	}
});

console.log(indexVM);
