(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],i[r]&&p.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/ether-how-to-use/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[t._v("How to use")]),a("div",{staticClass:"container"},[a("div",{staticClass:"heading"},[t._v("Create Wallet")]),a("div",[a("div",{staticClass:"input-container"},[a("input",{attrs:{type:"text",placeholder:"ERC20 Token address"}}),a("button",{on:{click:t.createWallet}},[t._v("Submit")])]),a("div",{staticClass:"output-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.memonic,expression:"memonic"}],attrs:{type:"text",placeholder:"Memonic Word phrase",disabled:""},domProps:{value:t.memonic},on:{input:function(e){e.target.composing||(t.memonic=e.target.value)}}})]),a("div",{staticClass:"output-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.privateKey,expression:"privateKey"}],attrs:{type:"text",placeholder:"Private Key",disabled:""},domProps:{value:t.privateKey},on:{input:function(e){e.target.composing||(t.privateKey=e.target.value)}}})])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"heading"},[t._v("Load Wallet")]),a("div",[a("div",{staticClass:"input-container"},[a("input",{attrs:{type:"text",placeholder:"Private key"}}),a("button",{on:{click:t.loadWallet}},[t._v("LOAD")])]),a("div",{staticClass:"output-container"},[t.walletLoadSuccessful?a("span",{staticClass:"success-msg"},[t._v("SUCCESS")]):t._e()])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"heading"},[t._v("Send Amount")]),a("div",[a("div",{staticClass:"input-container"},[a("input",{attrs:{type:"text",placeholder:"Amount to send"}}),a("input",{attrs:{type:"text",placeholder:"Receiver Wallet Address"}}),a("button",{on:{click:t.sendAmount}},[t._v("SEND")])]),a("div",{staticClass:"output-container"},[t.amountSentSuccessful?a("span",{staticClass:"success-msg"},[t._v("SUCCESS")]):t._e()])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"heading"},[t._v("Display Wallet Address")]),a("div",[a("div",{staticClass:"input-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.walletAddress,expression:"walletAddress"}],attrs:{type:"text"},domProps:{value:t.walletAddress},on:{input:function(e){e.target.composing||(t.walletAddress=e.target.value)}}}),a("button",{on:{click:t.displayWallet}},[t._v("Submit")])]),t._m(0)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"output-container"},[a("input",{attrs:{type:"text",placeholder:"Wallet Address",disabled:""}})])}],r={name:"app",data:function(){return{amountSentSuccessful:!1,walletLoadSuccessful:!1,memonic:"",privateKey:"",walletAddress:""}},methods:{loadWallet:function(){this.walletLoadSuccessful=!0},sendAmount:function(){this.amountSentSuccessful=!0},createWallet:function(){this.memonic="witch collapse practice feed shame open despair creek road again ice least",this.privateKey="51b332e30d9a1931464b09dadbb7def9a4ac0b5ed527bab97e257849c800b124"},displayWallet:function(){this.walletAddress="0xDCD32B85A911eF215101B2b5Ab764e874C030595"}}},o=r,l=(a("034f"),a("2877")),c=Object(l["a"])(o,i,s,!1,null,null,null),u=c.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.96f2dca6.js.map