exports.ids=[2],exports.modules={28:function(t,e,o){var content=o(32);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(3).default;t.exports.__inject__=function(t){r("1e65e77b",content,!0,t)}},29:function(t,e,o){t.exports=o.p+"img/6f395e1.jpg"},31:function(t,e,o){"use strict";o.r(e);var r=o(28),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,(function(){return r[t]}))}(d);e.default=n.a},32:function(t,e,o){(e=o(2)(!1)).push([t.i,".border{box-shadow:0 15px 15px rgba(0,0,0,.5)}",""]),t.exports=e},33:function(t,e,o){t.exports=o.p+"img/23b0941.jpg"},34:function(t,e,o){t.exports=o.p+"img/0b5d5e1.jpg"},42:function(t,e,o){"use strict";o.r(e);var r={props:{foodImage:{type:Object,required:!0,validator:function(t){return"image"in t&&"title"in t&&"alt"in t&&"text"in t&&"idx"in t}}},methods:{toggleShowHide(){this.isHidden=!this.isHidden,console.log("clicked!")}},data:()=>({isHidden:!1})},n=o(1);var d=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode('<div class="col-sm-6 col-md-4 col-lg-3 mt-4"><div class="card m-5" style="width: 15rem;"><img'+t._ssrAttr("src",t.foodImage.image)+t._ssrAttr("alt",t.foodImage.alt)+t._ssrClass(null,[t.isHidden?"card-img-top":"card-img-top border"])+'> <div class="card-body"><h5 class="card-title">'+t._ssrEscape(t._s(t.foodImage.title))+'</h5> <p class="card-text">'+t._ssrEscape(t._s(t.foodImage.text))+'</p> <a href="http://www.google.com" class="btn btn-primary">Go somewhere</a></div></div></div>')])}),[],!1,(function(t){var e=o(31);e.__inject__&&e.__inject__(t)}),null,"31a6ff46").exports,c=[{image:o(29),title:"Frozen frosty coffee drink",alt:"breakfast scramble 1",text:"description about this delicious coffee thing",idx:0},{image:o(33),title:"Hippy dippy breakfast scramble",alt:"breakfast scramble 2",text:"description about this delicious breakast scramble",idx:1},{image:o(34),title:"Banana splitz",alt:"breakfast scramble 3",text:"description about this delicious banana splitz",idx:2}],l={name:"Page2",mixins:[d],components:{foodImage:d},filters:{Upper:t=>t.toUpperCase()},data:()=>({foodImages:c})},f=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.foodImages?o("div",t._l(t.foodImages,(function(e){return o("foodImage",{key:e.idx,attrs:{foodImage:e,src:e.image,title:e.title,alt:e.alt,text:e.text},nativeOn:{click:function(e){return t.toggleShowHide(e)}}})})),1):t._e()}),[],!1,null,null,"1df2230f");e.default=f.exports}};