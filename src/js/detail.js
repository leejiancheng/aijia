"use strict";

import Vue from "vue";
import Topbar from "./components/topbar";
import {getScroll} from "./util/scroll";
import {search} from "data/index";
import {picList, navList} from "data/detail";
import BaiduMap from "./util/baiduMap";

// --------------------------
// 房源详情视图
let detailVM = new Vue({
	el: "#detailPage",
	components: {
		topbar: Topbar
	},
	data: {
		anchorTopList: [],							// 用于保存导航条各个选项距离页面顶部的距离
		navList: navList,							// 用于保存导航条的数据
		pageTop: 0,									// 用于保存当前位置距离页面顶部的距离
		nowNavIndex: 0,								// 用于保存当前选中的导航选项序号
		searchword: "",								// 搜索框内容
		searchList: [],								// 用于保存搜索结果列表的数据
		showSearch: false,							// 用于判定是否显示搜索结果(true: 显示; false: 不显示)
		picList: picList,							// 用于保存图片列表的数据
		nowBanNumber: 0,							// 用于保存当前选中的图片序号
		showMobile: false,							// 用于判断是否显示电话号码(true: 显示; false: 不显示)
		showFixedNav: false,						// 用于判断导航条是否置顶(true: 置顶; false: 不置顶)
		visible: false								// 用于判断是否展示图片模态框(true: 显示; false: 不显示)
	},
	computed: {
		// 计算图片列表容器的宽度
		picListWidth () {
			return 131 * this.picList.length;
		},
		// 计算图片列表容器的当前左边距
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
	watch: {
		// 监听滚动条的距离，并改变当前导航条选中的选项序号
		pageTop (curVal, oldVal) {
			let list = this.anchorTopList;
			let now = 0;
			for (let i = 0; i < list.length; i++) {
				if (curVal >= (list[i] - 110)) {
					now = i;
				}
			}
			this.nowNavIndex = +now;
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
		// 图片模态框左按钮
		prePic () {
			let number = +this.nowBanNumber;
			let length = this.picList.length;
			number = number - 1;
			if (number < 0) {
				number = length - 1;
			}
			this.nowBanNumber = number;
		},
		// 图片模态框右按钮
		nextPic () {
			let number = +this.nowBanNumber;
			let length = this.picList.length;
			number = number + 1;
			if (number > length - 1) {
				number = 0;
			}
			this.nowBanNumber = number;
		},
		// 选中当前banner图片，并判断是否显示图片模态框
		selectNowBanner (index, visible) {
			this.visible = !!visible;
			this.nowBanNumber = +index;
		},
		// 页面滚动条滚动事件
		handleScroll () {
			const scrollTop = getScroll(window, true);
			this.showFixedNav = scrollTop > 800 ? !!true : !!false;
			this.pageTop = scrollTop;
		},
		// 点击跳转锚点
		jumpAnchor (index) {
			let selector = `#navAnchor${index}`;
			let anchor = this.$el.querySelector(selector);
			let top = anchor.offsetTop;
			document.documentElement.scrollTop = top - 110;
		},
		// 初始化百度地图
		initMap (BMap) {
			// 创建地图实例
			let map = new BMap.Map("mapContainer");
			// 创建点坐标
			let point = new BMap.Point(114.025802, 22.542719);
			// 设置点的图片
			let icon = new BMap.Icon("/static/img/point.gif", new BMap.Size(20, 20));
			// 创建标注
			let marker = new BMap.Marker(point, {icon: icon});
			// 创建文字标签
			let label = new BMap.Label("东海国际公寓", {
				"offset": new BMap.Size(30, -10)
			});
			// 左上角，添加比例尺
			let topLeftControl = new BMap.ScaleControl({
				// eslint-disable-next-line
				"anchor": BMAP_ANCHOR_TOP_LEFT
			});
			// 左上角，添加默认缩放平移控件
			let topLeftNavigation = new BMap.NavigationControl();
			// 文字标签样式
			label.setStyle({
				"border": "1px solid #28baf0",
				"padding": "5px",
				"backgroundColor": "#fff",
				"borderRadius": "5px",
				"height": "30px",
				"whiteSpace": "nowrap",
				"lineHeight": "30px",
				"fontSize": "14px"
			});
			// 初始化地图，设置中心点坐标和地图级别
			map.centerAndZoom(point, 15);
			// 将标注添加到地图中
			map.addOverlay(marker);
			// 添加比例尺
			map.addControl(topLeftControl);
			// 添加默认缩放平移控件
			map.addControl(topLeftNavigation);
			// 将文字标签添加到地图中
			marker.setLabel(label);
		},
		// 获取导航条各个选项距离页面顶部的距离
		getAnchorTopList () {
			let arr = [];
			let list = this.navList;
			list.forEach((item, index) => {
				let selector = `#navAnchor${index}`;
				let anchor = document.querySelector(selector);
				let top = anchor.offsetTop;
				arr.push(top);
			});
			this.anchorTopList = arr;
		}
	},
	mounted () {
		window.addEventListener("scroll", this.handleScroll, false);
		BaiduMap.init().then((BMap) => {
			this.initMap(BMap);
		});
		this.getAnchorTopList();
	},
	destroyed () {
		window.removeEventListener("scroll", this.handleScroll, false);
	}
});

console.log(detailVM);
