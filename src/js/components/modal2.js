"use strict";

const prefixCls = "modal";
let template = `
	<div class="modal">
		<transtion :name="transitionNames[1]">
			<div :class="maskClasses" v-show="visible" @click="mask"></div>
		</transtion>
		<div :class="wrapClasses" @click="handleWrapClick">
			<transtion :name="transitionNames[0]" @after-leave="animationFinish">
				<div :class="classes" :style="mainStyles" v-show="visible">
					<div :class="[prefixCls + '-content']">
						<a :class="[prefixCls + '-close']" v-if="closable" @click="close">
							<slot name="close">
								<i class="icon-close"></i>
							</slot>
						</a>

						<div :class="[prefixCls + '-header']" v-if="showHead"><slot name="header"><div :class="[prefixCls + '-header-inner']">{{ title }}</div></slot></div>
						<div :class="[prefixCls + '-body']"><slot></slot></div>
						<div :class="[prefixCls + '-footer']" v-if="!footerHide">
							<slot name="footer">
								<button type="button" @click.native="cancel">{{ localeCancelText }}</button>
								<button type="button" @click.native="ok">{{ localeOkText }}</button>
							</slot>
						</div>
					</div>
				</div>
			</transtion>
		</div>
	</div>`;

module.exports = (Vue) => {
	Vue.component("button-counter", {
		name: "modal",
		data () {
			return {
				prefixCls: prefixCls,
				wrapShow: false,
				showHead: true,
				buttonLoading: false,
				visible: this.value
			};
		},
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
			// for instance
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
		template: template,
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
			classes () {
				return `${prefixCls}`;
			}
		},
		watch: {},
		methods: {},
		mounted () {},
		beforeDestroy () {}
	});
};
