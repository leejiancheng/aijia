"use strict";

import Vue from "vue";
const prefixCls = "modal";

let template = `
	<div class="modal">
		<transition :name="transitionNames[1]">
			<div :class="maskClasses" v-show="visible" @click="mask"></div>
		</transition>
		<div :class="wrapClasses">
			<transition :name="transitionNames[0]">
				<div :class="dialogClasses" v-show="visible">
					<div class="modal-content">
						<a class="modal-close" v-if="closable" @click="close">&times;</a>
						<div :class="[prefixCls + '-header']">
							<slot name="header">
								<div class="modal-header-inner">{{title}}</div>
							</slot>
						</div>
						<div :class="[prefixCls + '-body']">
							<slot></slot>
						</div>
						<div :class="[prefixCls + '-footer']" v-if="!footerHide">
							<button type="button" class="btn btn-cancel" @click="cancel">{{localeCancelText}}</button>
							<button type="button" class="btn btn-submit" @click="ok">{{localeOkText}}</button>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>`;

let modalComponent = Vue.extend({
	name: "modal",
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
		className: {
			type: String
		},
		title: {
			type: String
		},
		footerHide: {
			type: Boolean,
			default: false
		},
		okText: {
			type: String
		},
		cancelText: {
			type: String
		},
		transitionNames: {
			type: Array,
			default () {
				return ["ease", "fade"];
			}
		}
	},
	template: template,
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
		ok () {
			this.visible = false;
			this.$emit("on-ok");
		},
		cancel () {
			this.close();
		}
	},
	mounted () {
		if (this.visible) {
			this.wrapShow = true;
		}
	}
});

;

export default Vue.component("modal", modalComponent);
