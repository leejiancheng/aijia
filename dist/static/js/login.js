webpackJsonp([4],{FxA1:function(t,e,n){"use strict";var r=function(){var t={};return decodeURIComponent(window.location.search.substr(1)).replace(/([^&*]+)=([^&*]+)/gi,function(e,n,r){t[n]=r}),t},o=function(t,e,n,r){var o=t+"="+e;if(void 0!==n&&(o+="; path="+n),void 0!==r){var i=new Date;i.setTime(i.getTime()+24*r*60*60*1e3),o+="; "+("expires="+i.toUTCString())}document.cookie=o};t.exports={getAllParam:r,getParam:function(t){return r()[t]},setCookie:o,getCookie:function(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var r=e[n].split("=");if(t===r[0])return r[1]}return""},clearCookie:function(t){o(t,"","",-1)},setLocal:function(t,e,n){t="string"==typeof t?t:JSON.string(t),e="string"==typeof e?e:JSON.string(e);var r=Date.parse(new Date)/1e3+n;localStorage.setItem(t,e),n&&localStorage.setItem(t+"_exp",r)},getLocal:function(t){var e=localStorage.getItem(t)&&JSON.parse(localStorage.getItem(t)),n=Date.parse(new Date)/1e3,r=localStorage.getItem(t+"_exp");return r&&r-n>0?e:void localStorage.removeItem(t)},setSession:function(t,e,n){t="string"==typeof t?t:JSON.string(t),e="string"==typeof e?e:JSON.string(e);var r=Date.parse(new Date)/1e3+n;sessionStorage.setItem(t,e),n&&sessionStorage.setItem(t+"_exp",r)},getSession:function(t){var e=sessionStorage.getItem(t)&&JSON.parse(sessionStorage.getItem(t)),n=Date.parse(new Date)/1e3,r=sessionStorage.getItem(t+"_exp");return r&&r-n>0?e:void sessionStorage.removeItem(t)},isEmail:function(t){return new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$").test(t)},isMobile:function(t){return/^[1][3,4,5,7,8][0-9]{9}$/.test(t)},toast:function(t){var e=document.createElement("div");e.setAttribute("class","toast"),e.setAttribute("style","position:fixed;z-index:9999;padding:6px 12px;background:rgba(0,0,0,0.7);top:45%;color:#fff;font-size:14px;border-radius:2px;"),e.innerHTML=t,document.body.appendChild(e),e.style.left=(document.body.offsetWidth-e.offsetWidth)/2+"px",setTimeout(function(){document.body.removeChild(e)},2e3)},showLoading:function(){var t=document.createElement("div");t.setAttribute("class","loading"),t.setAttribute("id","loading"),t.innerHTML='\n\t\t<div class="loading-mask"></div>\n\t\t<div class="loading-wrap">\n\t\t\t<div class="loading-dot"></div>\n\t\t</div>',document.body.appendChild(t)},hideLoading:function(){var t=document.getElementById("loading");document.body.removeChild(t)}}},iwok:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lC5x"),o=n.n(r),i=n("J0Oq"),a=n.n(i),s=n("MVMM"),c=n("qRyJ"),u=(n.n(c),n("FxA1")),d=(n.n(u),new s.a({el:"#loginPage",data:{form:{username:"",password:""},inputFocus:{nameInput:!1,pwdInput:!1},showTip:{showNameTip:!1,showPwdTip:!1},validateText:{nameTipText:"",pwdTipText:""}},methods:{validateInput:function(t){var e=t.target.className,n=this.form,r=n.username,o=n.password;switch(e=e.split(" ")[1]){case"username":this.validateName(r);break;case"password":this.validatePwd(o)}},validateName:function(t){if(["",void 0,null].includes(t))return this.inputFocus.nameInput=!1,this.showTip.showNameTip=!0,this.validateText.nameTipText="您还没有输入账户名",!1;this.inputFocus.nameInput=!1,this.showTip.showNameTip=!1},validatePwd:function(t){if(["",void 0,null].includes(t))return this.inputFocus.pwdInput=!1,this.showTip.showPwdTip=!0,this.validateText.pwdTipText="您还没有输入密码",!1;this.inputFocus.pwdInput=!1,this.showTip.showPwdTip=!1},login:function(){var t=this;return a()(o.a.mark(function e(){var n,r,i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.form,r=n.username,i=n.password,!["",void 0,null].includes(r)){e.next=4;break}return t.validateName(),e.abrupt("return",!1);case 4:if(!["",void 0,null].includes(i)){e.next=7;break}return t.validatePwd(),e.abrupt("return",!1);case 7:a=c.Base64.encode(r),Object(u.setCookie)("username",a),location.href="./index.html";case 10:case"end":return e.stop()}},e,t)}))()}}}));console.log(d)},qRyJ:function(t,e,n){(function(r){var o;!function(e,n){t.exports=n(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:this,function(r){"use strict";var i,a=r.Base64;if(void 0!==t&&t.exports)try{i=n("7xR8").Buffer}catch(t){}var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t.charAt(n)]=n;return e}(s),u=String.fromCharCode,d=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?u(192|e>>>6)+u(128|63&e):u(224|e>>>12&15)+u(128|e>>>6&63)+u(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return u(240|e>>>18&7)+u(128|e>>>12&63)+u(128|e>>>6&63)+u(128|63&e)},f=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,p=function(t){return t.replace(f,d)},l=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[s.charAt(n>>>18),s.charAt(n>>>12&63),e>=2?"=":s.charAt(n>>>6&63),e>=1?"=":s.charAt(63&n)].join("")},g=r.btoa?function(t){return r.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,l)},h=i?i.from&&i.from!==Uint8Array.from?function(t){return(t.constructor===i.constructor?t:i.from(t)).toString("base64")}:function(t){return(t.constructor===i.constructor?t:new i(t)).toString("base64")}:function(t){return g(p(t))},m=function(t,e){return e?h(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):h(String(t))},v=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),w=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return u(55296+(e>>>10))+u(56320+(1023&e));case 3:return u((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return u((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},b=function(t){return t.replace(v,w)},x=function(t){var e=t.length,n=e%4,r=(e>0?c[t.charAt(0)]<<18:0)|(e>1?c[t.charAt(1)]<<12:0)|(e>2?c[t.charAt(2)]<<6:0)|(e>3?c[t.charAt(3)]:0),o=[u(r>>>16),u(r>>>8&255),u(255&r)];return o.length-=[0,0,2,1][n],o.join("")},S=r.atob?function(t){return r.atob(t)}:function(t){return t.replace(/[\s\S]{1,4}/g,x)},A=i?i.from&&i.from!==Uint8Array.from?function(t){return(t.constructor===i.constructor?t:i.from(t,"base64")).toString()}:function(t){return(t.constructor===i.constructor?t:new i(t,"base64")).toString()}:function(t){return b(S(t))},C=function(t){return A(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};if(r.Base64={VERSION:"2.4.3",atob:S,btoa:g,fromBase64:C,toBase64:m,utob:p,encode:m,encodeURI:function(t){return m(t,!0)},btou:b,decode:C,noConflict:function(){var t=r.Base64;return r.Base64=a,t}},"function"==typeof Object.defineProperty){var y=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};r.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",y(function(){return C(this)})),Object.defineProperty(String.prototype,"toBase64",y(function(t){return m(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",y(function(){return m(this,!0)}))}}return r.Meteor&&(Base64=r.Base64),void 0!==t&&t.exports?t.exports.Base64=r.Base64:void 0===(o=function(){return r.Base64}.apply(e,[]))||(t.exports=o),{Base64:r.Base64}})}).call(e,n("nvO+"))}},["iwok"]);
//# sourceMappingURL=login.js.map