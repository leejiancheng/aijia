"use strict";

import Vue from "vue";
import Topbar from "./components/topbar";
import {search} from "data/index";
import {toast} from "./util/tool";

// --------------------------
// 首页视图
let indexVM = new Vue({
	el: "#indexPage",
	components: {
		topbar: Topbar
	},
	data: {
		searchword: "",					// 搜索框内容
		searchList: [],					// 用于保存搜索结果列表的数据
		showSearch: false				// 用于判定是否显示搜索结果(true: 显示; false: 不显示)
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
			window.location.href = "./list.html";
			this.showSearch = false;
		},
		// 搜索按钮点击事件
		onSearch () {
			window.location.href = "./list.html";
			this.showSearch = false;
		},
		// 搜索输入框blur事件
		hideSearch (event) {},
		expectToast () {
			toast("该服务暂未开通，敬请期待");
			return false;
		}
	}
});

console.log(indexVM);
