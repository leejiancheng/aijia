webpackJsonp([6],{"8so/":function(t,e,i){"use strict";var s=i("aA9S"),n=i.n(s),o=i("a3Yh"),a=i.n(o),l=i("MVMM").a.component("modal",{name:"modal",template:'\n\t<div class="modal">\n\t\t<transition :name="transitionNames[1]">\n\t\t\t<div :class="maskClasses" v-show="visible" @click="mask"></div>\n\t\t</transition>\n\t\t<div :class="wrapClasses" @click="handleWrapClick">\n\t\t\t<transition :name="transitionNames[0]" @after-leave="animationFinish">\n\t\t\t\t<div :class="dialogClasses" :style="mainStyles" v-show="visible">\n\t\t\t\t\t<div :class="[prefixCls + \'-content\']">\n\t\t\t\t\t\t<a :class="[prefixCls + \'-close\']" v-if="closable" @click="close">\n\t\t\t\t\t\t\t<slot name="close">\n\t\t\t\t\t\t\t\t<i class="icon-close-empty">&times;</i>\n\t\t\t\t\t\t\t</slot>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div :class="[prefixCls + \'-header\']" v-if="showHead">\n\t\t\t\t\t\t\t<slot name="header">\n\t\t\t\t\t\t\t\t<div :class="[prefixCls + \'-header-inner\']">{{title}}</div>\n\t\t\t\t\t\t\t</slot>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div :class="[prefixCls + \'-body\']">\n\t\t\t\t\t\t\t<slot></slot>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div :class="[prefixCls + \'-footer\']" v-if="!footerHide">\n\t\t\t\t\t\t\t<slot name="footer">\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-cancel" @click="cancel">{{localeCancelText}}</button>\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-submit" @click="ok">{{localeOkText}}</button>\n\t\t\t\t\t\t\t</slot>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</transition>\n\t\t</div>\n\t</div>',props:{value:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},title:{type:String},width:{type:[Number,String],default:520},okText:{type:String},cancelText:{type:String},loading:{type:Boolean,default:!1},styles:{type:Object},className:{type:String},footerHide:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},transitionNames:{type:Array,default:function(){return["ease","fade"]}},transfer:{type:Boolean,default:!0}},data:function(){return{prefixCls:"modal",wrapShow:!1,showHead:!0,visible:this.value}},computed:{wrapClasses:function(){var t;return["modal-wrap",(t={},a()(t,"modal-hidden",!this.wrapShow),a()(t,""+this.className,!!this.className),t)]},maskClasses:function(){return"modal-mask"},dialogClasses:function(){return"modal-dialog"},mainStyles:function(){var t={},e=parseInt(this.width),i={width:e<100?e+"%":e+"px"},s=this.styles?this.styles:{};return n()(t,i,s),t},localeCancelText:function(){return["",void 0,null].includes(this.cancelText)?"取消":this.cancelText},localeOkText:function(){return["",void 0,null].includes(this.okText)?"确定":this.okText}},watch:{value:function(t){this.visible=t},visible:function(t){var e=this;!1===t?this.timer=setTimeout(function(){e.wrapShow=!1},300):(this.timer&&clearTimeout(this.timer),this.wrapShow=!0)},title:function(t){void 0===this.$slots.header&&(this.showHead=!!t)}},methods:{close:function(){this.visible=!1,this.$emit("on-cancel")},mask:function(){this.maskClosable&&this.close()},handleWrapClick:function(t){var e=t.target.getAttribute("class");e&&e.indexOf("modal-wrap")>-1&&this.mask()},ok:function(){this.visible=!1,this.$emit("on-ok")},cancel:function(){this.close()},EscClose:function(t){this.visible&&this.closable&&27===t.keyCode&&this.close()},animationFinish:function(){this.$emit("on-hidden")}},mounted:function(){this.visible&&(this.wrapShow=!0)}});e.a=l},FxA1:function(t,e,i){"use strict";var s=function(){var t={};return decodeURIComponent(window.location.search.substr(1)).replace(/([^&*]+)=([^&*]+)/gi,function(e,i,s){t[i]=s}),t},n=function(t,e,i,s){var n=t+"="+e;if(void 0!==i&&(n+="; path="+i),void 0!==s){var o=new Date;o.setTime(o.getTime()+24*s*60*60*1e3),n+="; "+("expires="+o.toUTCString())}document.cookie=n};t.exports={getAllParam:s,getParam:function(t){return s()[t]},setCookie:n,getCookie:function(t){for(var e=document.cookie.split("; "),i=0;i<e.length;i++){var s=e[i].split("=");if(t===s[0])return s[1]}return""},clearCookie:function(t){n(t,"","",-1)},setLocal:function(t,e,i){t="string"==typeof t?t:JSON.string(t),e="string"==typeof e?e:JSON.string(e);var s=Date.parse(new Date)/1e3+i;localStorage.setItem(t,e),i&&localStorage.setItem(t+"_exp",s)},getLocal:function(t){var e=localStorage.getItem(t)&&JSON.parse(localStorage.getItem(t)),i=Date.parse(new Date)/1e3,s=localStorage.getItem(t+"_exp");return s&&s-i>0?e:void localStorage.removeItem(t)},setSession:function(t,e,i){t="string"==typeof t?t:JSON.string(t),e="string"==typeof e?e:JSON.string(e);var s=Date.parse(new Date)/1e3+i;sessionStorage.setItem(t,e),i&&sessionStorage.setItem(t+"_exp",s)},getSession:function(t){var e=sessionStorage.getItem(t)&&JSON.parse(sessionStorage.getItem(t)),i=Date.parse(new Date)/1e3,s=sessionStorage.getItem(t+"_exp");return s&&s-i>0?e:void sessionStorage.removeItem(t)},isEmail:function(t){return new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$").test(t)},isMobile:function(t){return/^[1][3,4,5,7,8][0-9]{9}$/.test(t)},toast:function(t){var e=document.createElement("div");e.setAttribute("class","toast"),e.setAttribute("style","position:fixed;z-index:9999;padding:6px 12px;background:rgba(0,0,0,0.7);top:45%;color:#fff;font-size:14px;border-radius:2px;"),e.innerHTML=t,document.body.appendChild(e),e.style.left=(document.body.offsetWidth-e.offsetWidth)/2+"px",setTimeout(function(){document.body.removeChild(e)},2e3)},showLoading:function(){var t=document.createElement("div");t.setAttribute("class","loading"),t.setAttribute("id","loading"),t.innerHTML='\n\t\t<div class="loading-mask"></div>\n\t\t<div class="loading-wrap">\n\t\t\t<div class="loading-dot"></div>\n\t\t</div>',document.body.appendChild(t)},hideLoading:function(){var t=document.getElementById("loading");document.body.removeChild(t)}}},KeFu:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("MVMM"),n=i("FxA1"),o=(i.n(n),i("8so/")),a=new s.a({el:"#registerPage",components:{modal:o.a},data:{form:{username:"",code:"",mobile:"",password:"",confirm:""},inputFocus:{nameInput:!1,codeInput:!1,mobileInput:!1,pwdInput:!1,confirmInput:!1},showTip:{showNameTip:!1,showCodeTip:!1,showMobileTip:!1,showPwdTip:!1,showConfirmTip:!1},validateText:{nameTipText:"",codeTipText:"",mobileTipText:"",pwdTipText:"",confirmTipText:""},btnText:"获取动态码",visible:!1,canGetCode:!1},methods:{getCode:function(){if(!1===this.canGetCode)return!1;this.visible=!0},validateInput:function(t){var e=t.target.className;e=e.split(" ")[1];var i=this.form,s=i.username,n=i.code,o=i.mobile,a=i.password,l=i.confirm;switch(e){case"username":this.validateName(s);break;case"code":this.validateCode(n);break;case"mobile":this.validateMobile(o);break;case"password":this.validatePassword(a);break;case"confirm":this.validateConfirm(l)}},validateName:function(t){if(["",void 0,null].includes(t))return this.inputFocus.nameInput=!1,this.showTip.showNameTip=!0,this.validateText.nameTipText="请输入用户名",!1;this.inputFocus.nameInput=!1,this.showTip.showNameTip=!1},validateCode:function(t){if(["",void 0,null].includes(t))return this.inputFocus.codeInput=!1,this.showTip.showCodeTip=!0,this.validateText.codeTipText="请填写正确的手机动态码",!1;this.inputFocus.codeInput=!1,this.showTip.showCodeTip=!1},validateMobile:function(t){if(["",void 0,null].includes(t)||!Object(n.isMobile)(t))return this.inputFocus.mobileInput=!1,this.showTip.showMobileTip=!0,this.validateText.mobileTipText="请填写正确的手机号",!1;this.inputFocus.mobileInput=!1,this.showTip.showMobileTip=!1},validatePassword:function(t){if(["",void 0,null].includes(t))return this.inputFocus.pwdInput=!1,this.showTip.showPwdTip=!0,this.validateText.pwdTipText="请输入密码",!1;this.inputFocus.pwdInput=!1,this.showTip.showPwdTip=!1},validateConfirm:function(t){if(["",void 0,null].includes(t))return this.inputFocus.confirmInput=!1,this.showTip.showConfirmTip=!0,this.validateText.confirmTipText="请再次输入密码",!1;this.inputFocus.confirmInput=!1,this.showTip.showConfirmTip=!1},getMobileValue:function(t){var e=t.target.value;this.canGetCode=!!Object(n.isMobile)(e),console.log(this.canGetCode)},register:function(){}}});console.log(a)}},["KeFu"]);
//# sourceMappingURL=register.js.map