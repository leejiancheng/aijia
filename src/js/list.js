"use strict";

import Vue from "vue";
import {houseList} from "./data/index";

let listVM = new Vue({
	el: "#listPage",
	data: {
		houseList: houseList
	}
});

console.log(listVM);
