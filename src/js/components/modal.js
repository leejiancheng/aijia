"use strict";

import Vue from "vue";
const prefixCls = "modal";

let template = `
	<div class="modal">
		<transition :name="transitionNames[1]">
			<div :class="maskClasses" v-show="visible" @click="mask"></div>
		</transition>
		<div :class="wrapClasses" @click="handleWrapClick">
			<transition :name="transitionNames[0]" @after-leave="animationFinish">
				<div :class="dialogClasses" :style="mainStyles" v-show="visible">
					<div :class="[prefixCls + '-content']">
						<a :class="[prefixCls + '-close']" v-if="closable" @click="close">
							<slot name="close">
								<i class="icon-close-empty">&times;</i>
							</slot>
						</a>
						<div :class="[prefixCls + '-header']" v-if="showHead">
							<slot name="header">
								<div :class="[prefixCls + '-header-inner']">{{title}}</div>
							</slot>
						</div>
						<div :class="[prefixCls + '-body']">
							<slot></slot>
						</div>
						<div :class="[prefixCls + '-footer']" v-if="!footerHide">
							<slot name="footer">
								<button type="button" class="btn btn-cancel" @click="cancel">{{localeCancelText}}</button>
								<button type="button" class="btn btn-submit" @click="ok">{{localeOkText}}</button>
							</slot>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>`;

let modalComponent = Vue.component("modal", {
	name: "modal",
	template,
	props: {
		value: {
			type: Boolean,
			default: false
		},
		closable: {
			type: Boolean,
			default: true
		},
		maskClosable: {
			type: Boolean,
			default: true
		},
		title: {
			type: String
		},
		width: {
			type: [Number, String],
			default: 520
		},
		okText: {
			type: String
		},
		cancelText: {
			type: String
		},
		loading: {
			type: Boolean,
			default: false
		},
		styles: {
			type: Object
		},
		className: {
			type: String
		},
		footerHide: {
			type: Boolean,
			default: false
		},
		scrollable: {
			type: Boolean,
			default: false
		},
		transitionNames: {
			type: Array,
			default () {
				return ["ease", "fade"];
			}
		},
		transfer: {
			type: Boolean,
			default: true
		}
	},
	data () {
		return {
			prefixCls: prefixCls,
			wrapShow: false,
			showHead: true,
			visible: this.value
		};
	},
	computed: {
		wrapClasses () {
			return [
				`${prefixCls}-wrap`,
				{
					[`${prefixCls}-hidden`]: !this.wrapShow,
					[`${this.className}`]: !!this.className
				}
			];
		},
		maskClasses () {
			return `${prefixCls}-mask`;
		},
		dialogClasses () {
			return `${prefixCls}-dialog`;
		},
		mainStyles () {
			let style = {};
			const width = parseInt(this.width);
			const styleWidth = {
				width: width < 100 ? `${width}%` : `${width}px`
			};
			const customStyle = this.styles ? this.styles : {};
			Object.assign(style, styleWidth, customStyle);
			return style;
		},
		localeCancelText () {
			if (["", undefined, null].includes(this.cancelText)) {
				return "取消";
			} else {
				return this.cancelText;
			}
		},
		localeOkText () {
			if (["", undefined, null].includes(this.okText)) {
				return "确定";
			} else {
				return this.okText;
			}
		}
	},
	watch: {
		value (val) {
			this.visible = val;
		},
		visible (val) {
			if (val === false) {
				this.timer = setTimeout(() => {
					this.wrapShow = false;
				}, 300);
			} else {
				if (this.timer) clearTimeout(this.timer);
				this.wrapShow = true;
			}
		},
		title (val) {
			if (this.$slots.header === undefined) {
				this.showHead = !!val;
			}
		}
	},
	methods: {
		close () {
			this.visible = false;
			this.$emit("on-cancel");
		},
		mask () {
			if (this.maskClosable) {
				this.close();
			}
		},
		handleWrapClick (event) {
			const className = event.target.getAttribute("class");
			if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.mask();
		},
		ok () {
			this.visible = false;
			this.$emit("on-ok");
		},
		cancel () {
			this.close();
		},
		EscClose (event) {
			if (this.visible && this.closable) {
				if (event.keyCode === 27) {
					this.close();
				}
			}
		},
		animationFinish () {
			this.$emit("on-hidden");
		}
	},
	mounted () {
		if (this.visible) {
			this.wrapShow = true;
		}
	}
});

export default modalComponent;
