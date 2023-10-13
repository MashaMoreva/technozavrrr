(function(){"use strict";var t={9901:function(t,e,r){var i=r(7195),s=function(){var t=this,e=t._self._c;return e("main",{staticClass:"content container"},[t._m(0),e("div",{staticClass:"content__catalog"},[e("ProductFilter",{attrs:{"price-from":t.filterPriceFrom,"price-to":t.filterPriceTo,"category-id":t.filterCategoryId,color:t.filterColor},on:{"update:priceFrom":function(e){t.filterPriceFrom=e},"update:price-from":function(e){t.filterPriceFrom=e},"update:priceTo":function(e){t.filterPriceTo=e},"update:price-to":function(e){t.filterPriceTo=e},"update:categoryId":function(e){t.filterCategoryId=e},"update:category-id":function(e){t.filterCategoryId=e},"update:color":function(e){t.filterColor=e}}}),e("section",{staticClass:"catalog"},[e("ProductList",{attrs:{products:t.products}}),e("BasePagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content__top content__top--catalog"},[e("h1",{staticClass:"content__title"},[t._v("Каталог")]),e("span",{staticClass:"content__info"},[t._v(" 152 товара ")])])}],o=[{id:1,categoryId:1,title:"Ультразвуковая зубная щётка Playbrush Smart Sonic",price:5660,image:"img/toothbrush.jpg",colors:["#F0F0F0","#8BE000","#73B6EA"]},{id:2,categoryId:2,title:"Смартфон Xiaomi Mi Mix 3 6/128GB",price:21790,image:"img/phone.jpg",sizes:["32GB","64GB","128GB"]},{id:3,categoryId:3,title:"Электроскейт Razor Cruiser",price:24690,image:"img/board.jpg",colors:["#939393","#FF6B00","#222"]},{id:4,categoryId:2,title:"Смартфон Xiaomi Mi A3 4/64GB Android One",price:14960,image:"img/phone-2.jpg",sizes:["32GB","64GB","128GB"]},{id:5,categoryId:2,title:"Смартфон Xiaomi Redmi 6/128GB",price:8960,image:"img/phone-3.jpg",sizes:["32GB","64GB","128GB"]},{id:6,categoryId:3,title:"Электрический дрифт-карт Razor Crazy Cart",price:39900,image:"img/bicycle.jpg",colors:["#FFBE15","#8BE000","#FF6B00"]},{id:7,categoryId:3,title:"Гироскутер Razor Hovertrax 2.0",price:34900,image:"img/wheels.jpg",colors:["#939393","#F0F0F0"]},{id:8,categoryId:3,title:"Детский трюковой самокат Razor Grom",price:4990,image:"img/scooter.jpg",colors:["#222","#73B6EA"]},{id:9,categoryId:3,title:"Роллерсёрф Razor RipStik Air Pro",price:6690,image:"img/ripstik.jpg",colors:["#FFBE15","#8BE000","#222"]},{id:10,categoryId:5,title:"Наушники AirPods с беспроводным зарядным футляром",price:16560,image:"img/airpods.jpg"},{id:11,categoryId:5,title:"Наушники Sony",price:30690,image:"img/headphones.jpg",colors:["#222","#FF6B00"]},{id:12,categoryId:4,title:"Радионяня Motorola MBP16",price:3690,image:"img/radio.jpg",colors:["#73B6EA","#8BE000","#222"]}],l=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return e("ProductItem",{key:t.id,attrs:{product:t}})})),1)},c=[],n=function(){var t=this,e=t._self._c;return e("li",{staticClass:"catalog__item"},[e("a",{staticClass:"catalog__pic",attrs:{href:"#"}},[e("img",{attrs:{src:t.product.image,alt:t.product.title}})]),e("h3",{staticClass:"catalog__title"},[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.product.title)+" ")])]),e("span",{staticClass:"catalog__price"},[t._v(" "+t._s(t.product.price)+" ₽ ")]),e("ul",{staticClass:"colors colors--black"},t._l(t.product.colors,(function(r){return e("li",{key:r,staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedColor,expression:"selectedColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:r,checked:t._q(t.selectedColor,r)},on:{change:function(e){t.selectedColor=r}}}),e("span",{staticClass:"colors__value",style:{backgroundColor:r}})])])})),0),t.product.sizes&&t.product.sizes.length>0?e("ul",{staticClass:"sizes"},t._l(t.product.sizes,(function(r){return e("li",{key:r,staticClass:"sizes__item"},[e("label",{staticClass:"sizes__label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedSize,expression:"selectedSize"}],staticClass:"sizes__radio sr-only",attrs:{type:"radio"},domProps:{value:r,checked:t._q(t.selectedSize,r)},on:{change:function(e){t.selectedSize=r}}}),e("span",{staticClass:"sizes__value"},[t._v(" "+t._s(r)+" ")])])])})),0):t._e()])},u=[],p={props:["product"],data(){return{selectedColor:this.product.colors&&this.product.colors[0]||null,selectedSize:this.product.sizes&&this.product.sizes[0]||null}}},_=p,d=r(1001),m=(0,d.Z)(_,n,u,!1,null,null,null),g=m.exports,f={props:["products"],components:{ProductItem:g}},h=f,v=(0,d.Z)(h,l,c,!1,null,null,null),C=v.exports,b=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"catalog__pagination pagination"},[e("li",{staticClass:"pagination__item"},[e("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":1===t.page},attrs:{"aria-label":"Предыдущая страница",disabled:1===t.page},on:{click:function(e){return e.preventDefault(),t.previousPage.apply(null,arguments)}}},[e("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])])]),t._l(t.pages,(function(r){return e("li",{key:r,staticClass:"pagination__item"},[e("a",{staticClass:"pagination__link",class:{"pagination__link--current":r===t.page},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.paginate(r)}}},[t._v(" "+t._s(r)+" ")])])})),e("li",{staticClass:"pagination__item"},[e("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.page===t.pages},attrs:{href:"#","aria-label":"Следующая страница",disabled:t.page===t.pages},on:{click:function(e){return e.preventDefault(),t.nextPage.apply(null,arguments)}}},[e("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],2)},y=[],k={model:{prop:"page",event:"paginate"},props:["page","count","perPage"],computed:{pages(){return Math.ceil(this.count/this.perPage)}},methods:{paginate(t){this.$emit("paginate",t)},previousPage(){this.page>1&&this.paginate(this.page-1)},nextPage(){this.page<this.pages&&this.paginate(this.page+1)}}},P=k,F=(0,d.Z)(P,b,y,!1,null,null,null),x=F.exports,I=function(){var t=this,e=t._self._c;return e("aside",{staticClass:"filter"},[e("h2",{staticClass:"filter__title"},[t._v("Фильтры")]),e("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Цена")]),e("label",{staticClass:"form__label form__label--price"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"min-price"},domProps:{value:t.currentPriceFrom},on:{input:function(e){e.target.composing||(t.currentPriceFrom=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"form__value"},[t._v("От")])]),e("label",{staticClass:"form__label form__label--price"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"max-price"},domProps:{value:t.currentPriceTo},on:{input:function(e){e.target.composing||(t.currentPriceTo=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"form__value"},[t._v("До")])])]),e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Категория")]),e("label",{staticClass:"form__label form__label--select"},[e("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{type:"text",name:"category"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var r="_value"in e?e._value:e.value;return t._n(r)}));t.currentCategoryId=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v(" "+t._s(r.title)+" ")])}))],2)])]),e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Цвет")]),e("ul",{staticClass:"colors"},t._l(t.colors,(function(r){return e("li",{key:r,staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color"},domProps:{value:r,checked:t._q(t.currentColor,r)},on:{change:function(e){t.currentColor=r}}}),e("span",{staticClass:"colors__value",class:{"colors__value--selected":t.currentColor===r},style:"background-color: "+r})])])})),0)]),t._m(0),e("button",{staticClass:"filter__submit button button--primery",attrs:{type:"submit"}},[t._v(" Применить ")]),e("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v(" Сбросить ")])])])},B=[function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Объемб в ГБ")]),e("ul",{staticClass:"check-list"},[e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"8",checked:""}}),e("span",{staticClass:"check-list__desc"},[t._v(" 8 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"16"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 16 "),e("span",[t._v("(461)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"32"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 32 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"64"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 64 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"128"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 128 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"264"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 264 "),e("span",[t._v("(313)")])])])])])])}],z=[{id:1,title:"Зубные щётки"},{id:2,title:"Телефоны"},{id:3,title:"Спортивный инвентарь"},{id:4,title:"Радионяни"},{id:5,title:"Наушники"}],w=["#F0F0F0","#8BE000","#73B6EA","#939393","#FF6B00","#FFBE15","#222"],T={data(){return{currentPriceFrom:0,currentPriceTo:0,currentCategoryId:0,currentColor:""}},props:["priceFrom","priceTo","categoryId","color"],computed:{categories(){return z},colors(){return w}},watch:{priceFrom(t){this.currentPriceFrom=t},priceTo(t){this.currentPriceTo=t},categoryId(t){this.currentCategoryId=t},currentColor(t){this.currentColor=t}},methods:{submit(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:color",this.currentColor)},reset(){this.$emit("update:priceFrom",0),this.$emit("update:priceTo",0),this.$emit("update:categoryId",0),this.$emit("update:color",0),this.currentColor=""}}},j=T,E=(0,d.Z)(j,I,B,!1,null,null,null),G=E.exports,O={name:"App",components:{ProductList:C,BasePagination:x,ProductFilter:G},data(){return{filterPriceFrom:0,filterPriceTo:0,filterCategoryId:0,filterColor:"",page:1,productsPerPage:3}},computed:{filteredProducts(){let t=o;return this.filterPriceFrom>0&&(t=t.filter((t=>t.price>this.filterPriceFrom))),this.filterPriceTo>0&&(t=t.filter((t=>t.price<this.filterPriceTo))),this.filterCategoryId&&(t=t.filter((t=>t.categoryId===this.filterCategoryId))),this.filterColor&&(t=t.filter((t=>t.colors&&t.colors.includes(this.filterColor)))),t},products(){const t=(this.page-1)*this.productsPerPage;return this.filteredProducts.slice(t,t+this.productsPerPage)},countProducts(){return this.filteredProducts.length}}},$=O,A=(0,d.Z)($,s,a,!1,null,null,null),S=A.exports;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(S)}).$mount("#app")}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,i,s,a){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],a=t[u][2];for(var l=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(l=!1,a<o&&(o=a));if(l){t.splice(u--,1);var n=s();void 0!==n&&(e=n)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,s,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,o=i[0],l=i[1],c=i[2],n=0;if(o.some((function(e){return 0!==t[e]}))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(c)var u=c(r)}for(e&&e(i);n<o.length;n++)a=o[n],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},i=self["webpackChunktechnozavrrr"]=self["webpackChunktechnozavrrr"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(9901)}));i=r.O(i)})();
//# sourceMappingURL=app.673a3ba4.js.map