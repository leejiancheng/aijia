"use strict";

import Vue from "vue";
import _ from "lodash";
import Topbar from "./components/topbar";
import {showLoading, hideLoading} from "./util/tool";
import {getScroll} from "./util/scroll";
import {search, location, metroLine, sumPrice, sumAcreage, sumRoom, houseList} from "data/index";

let listVM = new Vue({
	el: "#listPage",
	components: {
		topbar: Topbar
	},
	data: {
		fixedHeader: false,						// 用于判断搜索栏是否置顶(true: 置顶; false: 不置顶)
		searchword: "",							// 搜索框内容
		searchList: [],							// 用于保存搜索结果列表的数据
		showSearch: false,						// 用于判定是否显示搜索结果(true: 显示; false: 不显示)
		nowFilterArea: "location",				// 用于判断区域还是地铁
		filterAreaFirst: [],					// 第一级菜单
		filterAreaSecond: [],					// 第二级菜单
		sumPrice: [],							// 总价
		sumAcreage: [],							// 面积
		sumRoom: [],							// 室厅
		houseList: [],							// 房子列表数据
		checkListType: 0						// 0: 默认排序; 1: 总价从低到高; 2: 总价从高到低; 3: 单价从低到高; 4: 单价从高到低; 5: 面积从小到大; 6: 面积从大到小;
	},
	methods: {
		// 搜索输入框input事件
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
		// 区域或地铁点击事件
		filterArea (type) {
			this.nowFilterArea = type;
			if (type === "location") {
				// 区域
				this.filterAreaFirst = location;
				this.filterAreaSecond = location[0].wzList;
			} else if (type === "metro") {
				// 地铁
				this.filterAreaFirst = metroLine;
				this.filterAreaSecond = metroLine[0].wzList;
			}
			console.log(this.filterAreaSecond);
		},
		// 第一级菜单点击事件
		selectFirst (index) {
			if (this.nowFilterArea === "location") {
				// 区域
				let temp = location;
				temp.forEach((item, index) => {
					item.selected = false;
				});
				temp[index].selected = true;
				this.filterAreaFirst = temp;
				this.filterAreaSecond = temp[index].wzList;
			} else if (this.nowFilterArea === "metro") {
				// 地铁
				let temp = metroLine;
				temp.forEach((item, index) => {
					item.selected = false;
				});
				temp[index].selected = true;
				this.filterAreaFirst = temp;
				this.filterAreaSecond = temp[index].wzList;
			}
		},
		// 第二级菜单点击事件
		selectSecond (index) {
			this.filterAreaSecond.forEach((item, index) => {
				item.selected = false;
			});
			this.filterAreaSecond[index].selected = true;
		},
		// 总价，面积，室厅条件选择事件
		selectEvent (event, index) {
			let className = event.target.parentElement.className;
			let arr = this[`sum${className}`];
			arr.forEach((item, index) => {
				item.selected = false;
			});
			arr[index].selected = true;
			this[`sum${className}`] = arr;
		},
		// 默认，总价，单价，面积排序
		onOrderBy (event) {
			// showLoading();
			let type = +event.target.dataset.type;
			this.checkListType = type;
			let arr = this.houseList;
			let newArr = [];
			switch (type) {
			// 默认排序
			case 0:
				newArr = _.orderBy(arr, "infoId");
				break;
			// 总价从低到高
			case 1:
				newArr = _.orderBy(arr, (item) => {
					return +item.price;
				});
				break;
			// 总价从高到低
			case 2:
				newArr = _.orderBy(arr, (item) => {
					return -item.price;
				});
				break;
			// 单价从低到高
			case 3:
				newArr = _.orderBy(arr, (item) => {
					return +item.danjia;
				});
				break;
			// 单价从高到低
			case 4:
				newArr = _.orderBy(arr, (item) => {
					return -item.danjia;
				});
				break;
			// 面积从小到大
			case 5:
				newArr = _.orderBy(arr, (item) => {
					return +item.area;
				});
				break;
			// 面积从大到小
			case 6:
				newArr = _.orderBy(arr, (item) => {
					return -item.area;
				});
				break;
			}
			this.houseList = newArr;
		},
		// 搜索栏是否置顶
		handleScroll () {
			const scrollTop = getScroll(window, true);
			this.fixedHeader = scrollTop > 170 ? !!true : !!false;
		}
	},
	mounted () {
		showLoading();
		this.filterAreaFirst = location;
		this.sumPrice = sumPrice;
		this.sumAcreage = sumAcreage;
		this.sumRoom = sumRoom;
		this.houseList = houseList;
		window.addEventListener("scroll", this.handleScroll, false);
		hideLoading();
	}
});

console.log(listVM);
