(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{3731:function(t,a,e){"use strict";e.r(a);var i=e("c5fc"),r=e("446c");for(var n in r)"default"!==n&&function(t){e.d(a,t,function(){return r[t]})}(n);e("837b");var o=e("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"7c7bf6ca",null);a["default"]=s.exports},"446c":function(t,a,e){"use strict";e.r(a);var i=e("cce4"),r=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=r.a},"837b":function(t,a,e){"use strict";var i=e("8c82"),r=e.n(i);r.a},"8c82":function(t,a,e){var i=e("cead");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=e("4f06").default;r("da804b8a",i,!0,{sourceMap:!1,shadowMode:!1})},c5fc:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"search-block"},[e("v-uni-view",{staticClass:"search-ico-wapper"},[e("v-uni-image",{staticClass:"search-ico",attrs:{src:"../../static/icos/search.png"}})],1),e("v-uni-input",{staticClass:"search-text",attrs:{placeholder:"搜索预告",maxlength:"10","confirm-type":"search"},on:{confirm:function(a){a=t.$handleEvent(a),t.searchMe(a)}}})],1),e("v-uni-view",{staticClass:"movie-list page-block"},t._l(t.trailerList,function(a){return e("v-uni-view",{staticClass:"movie-wapper"},[e("v-uni-image",{staticClass:"poster",attrs:{src:a.cover,"data-trailerId":a.id},on:{click:function(a){a=t.$handleEvent(a),t.showTrailer(a)}}})],1)}))],1)},r=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return r})},cce4:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{trailerList:[],keywords:"",page:1,totalPages:1}},onLoad:function(){var t=this;uni.showLoading({mask:!0,title:"请稍后..."}),uni.showNavigationBarLoading();var a=t.serverUrl;uni.request({url:a+"/search/list?keywords=&page=&pageSize=",method:"POST",success:function(a){if(200==a.data.status){var e=a.data.data.rows;t.trailerList=e}},complete:function(){uni.hideNavigationBarLoading(),uni.hideLoading()}})},onReachBottom:function(){var t=this,a=t.page+1,e=t.keywords,i=t.totalPages;a>i||t.pagedTrailerList(e,a,15)},methods:{showTrailer:function(t){var a=t.currentTarget.dataset.trailerid;uni.navigateTo({url:"../movie/movie?trailerId="+a})},pagedTrailerList:function(t,a,e){var i=this;uni.showLoading({mask:!0,title:"请稍后..."}),uni.showNavigationBarLoading();var r=i.serverUrl;uni.request({url:r+"/search/list?keywords="+t+"&page="+a+"&pageSize="+e,method:"POST",success:function(t){if(200==t.data.status){var e=t.data.data.rows;i.trailerList=i.trailerList.concat(e),i.totalPages=t.data.data.total,i.page=a}},complete:function(){uni.hideNavigationBarLoading(),uni.hideLoading()}})},searchMe:function(t){var a=this,e=t.detail.value;a.keywords=e,a.trailerList=[],a.pagedTrailerList(e,1,15)}}};a.default=i},cead:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,"/* 搜索框 start */.search-ico[data-v-7c7bf6ca]{width:%?40?%;height:%?40?%}.search-text[data-v-7c7bf6ca]{font-size:14px;background-color:#eaeaea;height:%?60?%;width:%?650?%}.search-block[data-v-7c7bf6ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?0?% %?20?% %?20?% %?20?%;\r\n\t/* 固定搜索栏 */position:fixed;top:100;z-index:2000;background-color:#f8f8f8}.search-ico-wapper[data-v-7c7bf6ca]{background-color:#eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?0?% %?10?%}\r\n/* 搜索框 end */\r\n/* 预告片列表 start */.poster[data-v-7c7bf6ca]{width:%?200?%;height:%?270?%}.movie-list[data-v-7c7bf6ca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:%?100?% %?10?% %?0?% %?10?%}.movie-wapper[data-v-7c7bf6ca]{padding:%?10?% %?20?%}\r\n/* 预告片列表 end */",""])}}]);