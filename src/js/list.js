"use strict";

import Vue from "vue";
// import {search, houseList, location, metroLine} from "data/index";
import {showLoading} from "./util/tool";
import {location, metroLine, sumPrice, sumAcreage, sumRoom, houseList} from "data/index";

let listVM = new Vue({
	el: "#listPage",
	data: {
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
		// 第一级菜单点击事件
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
		onOrderBy (event) {
			showLoading();
			let type = +event.target.dataset.type;
			this.checkListType = type;
			// toast(this.checkListType);
		}
	},
	mounted () {
		this.filterAreaFirst = location;
		this.sumPrice = sumPrice;
		this.sumAcreage = sumAcreage;
		this.sumRoom = sumRoom;
		this.houseList = houseList;
	}
	// 	this.searchList = search;
	// 	this.location = location;
	// 	this.metroLine = metroLine;
	// }
});

console.log(listVM);
