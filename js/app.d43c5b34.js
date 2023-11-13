(function(){"use strict";var t={8270:function(t,e,s){var a=s(7195),r=function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header"},[e("div",{staticClass:"header__wrapper container"},[e("span",{staticClass:"header__info"},[t._v("technozavrrr")]),t._m(0),e("a",{staticClass:"header__tel",attrs:{href:"tel:8 800 600 90 09"}},[t._v(" 8 800 600 90 09 ")]),e("CartIndicator")],1)]),e("router-view"),e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer__wrapper container"},[t._m(1),e("ul",{staticClass:"footer__social social"},[e("li",{staticClass:"social__item"},[e("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Вконтакте"}},[e("svg",{attrs:{width:"20",height:"11",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-vk"}})])])]),e("li",{staticClass:"social__item"},[e("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Инстаграм"}},[e("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-insta"}})])])]),e("li",{staticClass:"social__item"},[e("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Facebook"}},[e("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-facebook"}})])])]),e("li",{staticClass:"social__item"},[e("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Twitter"}},[e("svg",{attrs:{width:"17",height:"14",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-twitter"}})])])]),e("li",{staticClass:"social__item"},[e("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Telegram"}},[e("svg",{attrs:{width:"19",height:"17",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-telegram"}})])])])]),e("p",{staticClass:"footer__desc"},[t._v(" Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. ")]),t._m(2),e("span",{staticClass:"footer__copyright"},[t._v(" © 2023 Технозавррр ")])])])],1)},i=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"header__logo",attrs:{href:"#"}},[e("img",{attrs:{src:"img/svg/logo-tech.svg",alt:"Логотип интернет магазина Технозавррр",width:"190",height:"33"}})])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer__links"},[e("li",[e("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Каталог ")])]),e("li",[e("a",{staticClass:"footer__link",attrs:{href:"tel:88006009009"}},[t._v(" 8 800 600 90 09 ")])]),e("li",[e("a",{staticClass:"footer__link",attrs:{href:"mailto:hi@technozavrrr.com"}},[t._v(" hi@technozavrrr.com ")])]),e("li",[e("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Распродажа ")])]),e("li",[e("a",{staticClass:"footer__link footer__link--medium",attrs:{href:"#"}},[t._v(" Заказать звонок ")])])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer__data"},[e("li",[e("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Политика конфиденциальности ")])]),e("li",[e("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Публичная оферта ")])])])}],o=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"header__cart",attrs:{"aria-label":"Корзина с товарами",to:{name:"cart"}}},[e("svg",{attrs:{width:"30",height:"21",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-cart"}})]),e("span",{staticClass:"header__count",attrs:{"aria-label":"Количество товаров"}},[t._v(t._s(t.$store.state.cartProducts.length))])])},l=[],c={},n=c,u=s(1001),_=(0,u.Z)(n,o,l,!1,null,null,null),d=_.exports,p={components:{CartIndicator:d}},m=p,f=(0,u.Z)(m,r,i,!1,null,null,null),h=f.exports,C=s(2241),v=function(){var t=this,e=t._self._c;return e("main",{staticClass:"content container"},[t._m(0),e("div",{staticClass:"content__catalog"},[e("ProductFilter",{attrs:{"price-from":t.filterPriceFrom,"price-to":t.filterPriceTo,"category-id":t.filterCategoryId,color:t.filterColor},on:{"update:priceFrom":function(e){t.filterPriceFrom=e},"update:price-from":function(e){t.filterPriceFrom=e},"update:priceTo":function(e){t.filterPriceTo=e},"update:price-to":function(e){t.filterPriceTo=e},"update:categoryId":function(e){t.filterCategoryId=e},"update:category-id":function(e){t.filterCategoryId=e},"update:color":function(e){t.filterColor=e}}}),e("section",{staticClass:"catalog"},[e("ProductList",{attrs:{products:t.products}}),e("BasePagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content__top content__top--catalog"},[e("h1",{staticClass:"content__title"},[t._v("Каталог")]),e("span",{staticClass:"content__info"},[t._v(" 152 товара ")])])}],b=[{id:1,categoryId:1,title:"Ультразвуковая зубная щётка Playbrush Smart Sonic",price:5660,image:"img/toothbrush.jpg",colors:["#F0F0F0","#8BE000","#73B6EA"]},{id:2,categoryId:2,title:"Смартфон Xiaomi Mi Mix 3 6/128GB",price:21790,image:"img/phone.jpg",sizes:["32GB","64GB","128GB"]},{id:3,categoryId:3,title:"Электроскейт Razor Cruiser",price:24690,image:"img/board.jpg",colors:["#939393","#FF6B00","#222"]},{id:4,categoryId:2,title:"Смартфон Xiaomi Mi A3 4/64GB Android One",price:14960,image:"img/phone-2.jpg",sizes:["32GB","64GB","128GB"]},{id:5,categoryId:2,title:"Смартфон Xiaomi Redmi 6/128GB",price:8960,image:"img/phone-3.jpg",sizes:["32GB","64GB","128GB"]},{id:6,categoryId:3,title:"Электрический дрифт-карт Razor Crazy Cart",price:39900,image:"img/bicycle.jpg",colors:["#FFBE15","#8BE000","#FF6B00"]},{id:7,categoryId:3,title:"Гироскутер Razor Hovertrax 2.0",price:34900,image:"img/wheels.jpg",colors:["#939393","#F0F0F0"]},{id:8,categoryId:3,title:"Детский трюковой самокат Razor Grom",price:4990,image:"img/scooter.jpg",colors:["#222","#73B6EA"]},{id:9,categoryId:3,title:"Роллерсёрф Razor RipStik Air Pro",price:6690,image:"img/ripstik.jpg",colors:["#FFBE15","#8BE000","#222"]},{id:10,categoryId:5,title:"Наушники AirPods с беспроводным зарядным футляром",price:16560,image:"img/airpods.jpg"},{id:11,categoryId:5,title:"Наушники Sony",price:30690,image:"img/headphones.jpg",colors:["#222","#FF6B00"]},{id:12,categoryId:4,title:"Радионяня Motorola MBP16",price:3690,image:"img/radio.jpg",colors:["#73B6EA","#8BE000","#222"]}],k=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return e("ProductItem",{key:t.id,attrs:{product:t}})})),1)},y=[],P=function(){var t=this,e=t._self._c;return e("li",{staticClass:"catalog__item"},[e("router-link",{staticClass:"catalog__pic",attrs:{to:{name:"product",params:{id:t.product.id}}}},[e("img",{attrs:{src:t.product.image,alt:t.product.title}})]),e("h3",{staticClass:"catalog__title"},[e("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.product.title)+" ")])]),e("span",{staticClass:"catalog__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),e("ul",{staticClass:"colors colors--black"},t._l(t.product.colors,(function(s){return e("li",{key:s,staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedColor,expression:"selectedColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:s,checked:t._q(t.selectedColor,s)},on:{change:function(e){t.selectedColor=s}}}),e("span",{staticClass:"colors__value",style:{backgroundColor:s}})])])})),0),t.product.sizes&&t.product.sizes.length>0?e("ul",{staticClass:"sizes"},t._l(t.product.sizes,(function(s){return e("li",{key:s,staticClass:"sizes__item"},[e("label",{staticClass:"sizes__label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedSize,expression:"selectedSize"}],staticClass:"sizes__radio sr-only",attrs:{type:"radio"},domProps:{value:s,checked:t._q(t.selectedSize,s)},on:{change:function(e){t.selectedSize=s}}}),e("span",{staticClass:"sizes__value"},[t._v(" "+t._s(s)+" ")])])])})),0):t._e()],1)},x=[],F=new a.ZP;function I(t,e){F.$emit("gotoPage",t,e)}function w(t){return(new Intl.NumberFormat).format(t)}var z={props:["product"],data(){return{selectedColor:this.product.colors&&this.product.colors[0]||null,selectedSize:this.product.sizes&&this.product.sizes[0]||null}},filters:{numberFormat:w},methods:{gotoPage:I},components:{router:zt}},T=z,B=(0,u.Z)(T,P,x,!1,null,null,null),A=B.exports,E={props:["products"],components:{ProductItem:A}},S=E,Z=(0,u.Z)(S,k,y,!1,null,null,null),$=Z.exports,O=function(){var t=this,e=t._self._c;return e("ul",{staticClass:"catalog__pagination pagination"},[e("li",{staticClass:"pagination__item"},[e("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":1===t.page},attrs:{"aria-label":"Предыдущая страница",disabled:1===t.page},on:{click:function(e){return e.preventDefault(),t.previousPage.apply(null,arguments)}}},[e("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])])]),t._l(t.pages,(function(s){return e("li",{key:s,staticClass:"pagination__item"},[e("a",{staticClass:"pagination__link",class:{"pagination__link--current":s===t.page},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.paginate(s)}}},[t._v(" "+t._s(s)+" ")])])})),e("li",{staticClass:"pagination__item"},[e("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.page===t.pages},attrs:{href:"#","aria-label":"Следующая страница",disabled:t.page===t.pages},on:{click:function(e){return e.preventDefault(),t.nextPage.apply(null,arguments)}}},[e("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],2)},j=[],G={model:{prop:"page",event:"paginate"},props:["page","count","perPage"],computed:{pages(){return Math.ceil(this.count/this.perPage)}},methods:{paginate(t){this.$emit("paginate",t)},previousPage(){this.page>1&&this.paginate(this.page-1)},nextPage(){this.page<this.pages&&this.paginate(this.page+1)}}},N=G,D=(0,u.Z)(N,O,j,!1,null,null,null),M=D.exports,L=function(){var t=this,e=t._self._c;return e("aside",{staticClass:"filter"},[e("h2",{staticClass:"filter__title"},[t._v("Фильтры")]),e("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Цена")]),e("label",{staticClass:"form__label form__label--price"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"min-price"},domProps:{value:t.currentPriceFrom},on:{input:function(e){e.target.composing||(t.currentPriceFrom=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"form__value"},[t._v("От")])]),e("label",{staticClass:"form__label form__label--price"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"max-price"},domProps:{value:t.currentPriceTo},on:{input:function(e){e.target.composing||(t.currentPriceTo=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",{staticClass:"form__value"},[t._v("До")])])]),e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Категория")]),e("label",{staticClass:"form__label form__label--select"},[e("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{type:"text",name:"category"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var s="_value"in e?e._value:e.value;return t._n(s)}));t.currentCategoryId=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(s){return e("option",{key:s.id,domProps:{value:s.id}},[t._v(" "+t._s(s.title)+" ")])}))],2)])]),e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Цвет")]),e("ul",{staticClass:"colors"},t._l(t.colors,(function(s){return e("li",{key:s,staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color"},domProps:{value:s,checked:t._q(t.currentColor,s)},on:{change:function(e){t.currentColor=s}}}),e("span",{staticClass:"colors__value",class:{"colors__value--selected":t.currentColor===s},style:"background-color: "+s})])])})),0)]),t._m(0),e("button",{staticClass:"filter__submit button button--primery",attrs:{type:"submit"}},[t._v(" Применить ")]),e("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v(" Сбросить ")])])])},R=[function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Объемб в ГБ")]),e("ul",{staticClass:"check-list"},[e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"8",checked:""}}),e("span",{staticClass:"check-list__desc"},[t._v(" 8 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"16"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 16 "),e("span",[t._v("(461)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"32"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 32 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"64"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 64 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"128"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 128 "),e("span",[t._v("(313)")])])])]),e("li",{staticClass:"check-list__item"},[e("label",{staticClass:"check-list__label"},[e("input",{staticClass:"check-list__check sr-only",attrs:{type:"checkbox",name:"volume",value:"264"}}),e("span",{staticClass:"check-list__desc"},[t._v(" 264 "),e("span",[t._v("(313)")])])])])])])}],U=[{id:1,title:"Зубные щётки"},{id:2,title:"Телефоны"},{id:3,title:"Спортивный инвентарь"},{id:4,title:"Радионяни"},{id:5,title:"Наушники"}],W=["#F0F0F0","#8BE000","#73B6EA","#939393","#FF6B00","#FFBE15","#222"],X={data(){return{currentPriceFrom:0,currentPriceTo:0,currentCategoryId:0,currentColor:""}},props:["priceFrom","priceTo","categoryId","color"],computed:{categories(){return U},colors(){return W}},watch:{priceFrom(t){this.currentPriceFrom=t},priceTo(t){this.currentPriceTo=t},categoryId(t){this.currentCategoryId=t},currentColor(t){this.currentColor=t}},methods:{submit(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:color",this.currentColor)},reset(){this.$emit("update:priceFrom",0),this.$emit("update:priceTo",0),this.$emit("update:categoryId",0),this.$emit("update:color",0),this.currentColor=""}}},q=X,H=(0,u.Z)(q,L,R,!1,null,null,null),Q=H.exports,J={components:{ProductList:$,BasePagination:M,ProductFilter:Q},data(){return{filterPriceFrom:0,filterPriceTo:0,filterCategoryId:0,filterColor:"",page:1,productsPerPage:3}},computed:{filteredProducts(){let t=b;return this.filterPriceFrom>0&&(t=t.filter((t=>t.price>this.filterPriceFrom))),this.filterPriceTo>0&&(t=t.filter((t=>t.price<this.filterPriceTo))),this.filterCategoryId&&(t=t.filter((t=>t.categoryId===this.filterCategoryId))),this.filterColor&&(t=t.filter((t=>t.colors&&t.colors.includes(this.filterColor)))),t},products(){const t=(this.page-1)*this.productsPerPage;return this.filteredProducts.slice(t,t+this.productsPerPage)},countProducts(){return this.filteredProducts.length}}},K=J,V=(0,u.Z)(K,v,g,!1,null,null,null),Y=V.exports,tt=function(){var t=this,e=t._self._c;return e("main",{staticClass:"content container"},[e("div",{staticClass:"content__top"},[e("ul",{staticClass:"breadcrumbs"},[e("li",{staticClass:"breadcrumbs__item"},[e("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" Каталог ")])],1),e("li",{staticClass:"breadcrumbs__item"},[e("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" "+t._s(t.category.title)+" ")])],1),e("li",{staticClass:"breadcrumbs__item"},[e("a",{staticClass:"breadcrumbs__link"},[t._v(" "+t._s(t.product.title)+" ")])])])]),e("section",{staticClass:"item"},[e("div",{staticClass:"item__pics pics"},[e("div",{staticClass:"pics__wrapper"},[e("img",{attrs:{width:"570",height:"570",src:t.product.image,alt:t.product.title}})])]),e("div",{staticClass:"item__info"},[e("span",{staticClass:"item__code"},[t._v("Артикул: "+t._s(t.product.id))]),e("h2",{staticClass:"item__title"},[t._v(t._s(t.product.title))]),e("div",{staticClass:"item__form"},[e("form",{staticClass:"form",attrs:{action:"#",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.addToCart.apply(null,arguments)}}},[e("b",{staticClass:"item__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),t._m(0),t._m(1),e("div",{staticClass:"item__row"},[e("div",{staticClass:"form__counter"},[e("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:t.decrementProductAmount}},[e("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-minus"}})])]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.productAmount,expression:"productAmount",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:t.productAmount},on:{input:function(e){e.target.composing||(t.productAmount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:t.incrementProductAmount}},[e("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),e("button",{staticClass:"button button--primery",attrs:{type:"submit"}},[t._v(" В корзину ")])])])])]),t._m(2)])])},et=[function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Цвет:")]),e("ul",{staticClass:"colors"},[e("li",{staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item",value:"blue",checked:""}}),e("span",{staticClass:"colors__value",staticStyle:{"background-color":"#73b6ea"}})])]),e("li",{staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item",value:"yellow"}}),e("span",{staticClass:"colors__value",staticStyle:{"background-color":"#ffbe15"}})])]),e("li",{staticClass:"colors__item"},[e("label",{staticClass:"colors__label"},[e("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item",value:"gray"}}),e("span",{staticClass:"colors__value",staticStyle:{"background-color":"#939393"}})])])])])},function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"form__block"},[e("legend",{staticClass:"form__legend"},[t._v("Объемб в ГБ:")]),e("ul",{staticClass:"sizes sizes--primery"},[e("li",{staticClass:"sizes__item"},[e("label",{staticClass:"sizes__label"},[e("input",{staticClass:"sizes__radio sr-only",attrs:{type:"radio",name:"sizes-item",value:"32"}}),e("span",{staticClass:"sizes__value"},[t._v(" 32gb ")])])]),e("li",{staticClass:"sizes__item"},[e("label",{staticClass:"sizes__label"},[e("input",{staticClass:"sizes__radio sr-only",attrs:{type:"radio",name:"sizes-item",value:"64"}}),e("span",{staticClass:"sizes__value"},[t._v(" 64gb ")])])]),e("li",{staticClass:"sizes__item"},[e("label",{staticClass:"sizes__label"},[e("input",{staticClass:"sizes__radio sr-only",attrs:{type:"radio",name:"sizes-item",value:"128",checked:""}}),e("span",{staticClass:"sizes__value"},[t._v(" 128gb ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"item__desc"},[e("ul",{staticClass:"tabs"},[e("li",{staticClass:"tabs__item"},[e("a",{staticClass:"tabs__link tabs__link--current"},[t._v(" Описание ")])]),e("li",{staticClass:"tabs__item"},[e("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Характеристики ")])]),e("li",{staticClass:"tabs__item"},[e("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Гарантия ")])]),e("li",{staticClass:"tabs__item"},[e("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Оплата и доставка ")])])]),e("div",{staticClass:"item__content"},[e("p",[t._v(" Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS"),e("br"),t._v(" Синхронизация со смартфоном"),e("br"),t._v(" Связь по Bluetooth Smart, ANT+ и Wi-Fi"),e("br"),t._v(" Поддержка сторонних приложений"),e("br")]),e("a",{attrs:{href:"#"}},[t._v(" Все характеристики ")]),e("h3",[t._v("Что это?")]),e("p",[t._v(" Wahoo ELEMNT BOLT GPS – это велокомпьютер, который позволяет оптимизировать свои велотренировки, сделав их максимально эффективными. Wahoo ELEMNT BOLT GPS синхронизируется с датчиками по ANT+, объединяя полученную с них информацию. Данные отображаются на дисплее, а также сохраняются на смартфоне. При этом на мобильное устройство можно установить как фирменное приложение, так и различные приложения сторонних разработчиков. Велокомпьютер точно отслеживает местоположение, принимая сигнал с целого комплекса спутников. Эта информация позволяет смотреть уже преодоленные маршруты и планировать новые велопрогулки. ")]),e("h3",[t._v("Дизайн")]),e("p",[t._v(" Велокомпьютер Wahoo ELEMNT BOLT очень компактный. Размеры устройства составляют всего 74,6 x 47,3 x 22,1 мм. что не превышает габариты смартфона. Корпус гаджета выполнен из черного пластика. На обращенной к пользователю стороне расположен дисплей диагональю 56 мм. На дисплей выводятся координаты и скорость, а также полученная со смартфона и синхронизированных датчиков информация: интенсивность, скорость вращения педалей, пульс и т.д. (датчики не входят в комплект поставки). Корпус велокомпьютера имеет степень защиты от влаги IPX7. Это означает, что устройство не боится пыли, а также выдерживает кратковременное (до 30 минут) погружение в воду на глубину не более 1 метра. ")])])])}],st={data(){return{productAmount:1}},filters:{numberFormat:w},computed:{product(){return b.find((t=>t.id===+this.$route.params.id))},category(){return U.find((t=>t.id===this.product.categoryId))}},methods:{gotoPage:I,addToCart(){this.$store.commit("addProductToCart",{productId:this.product.id,amount:this.productAmount})},incrementProductAmount(){this.productAmount+=1},decrementProductAmount(){this.productAmount>1&&(this.productAmount-=1)}}},at=st,rt=(0,u.Z)(at,tt,et,!1,null,null,null),it=rt.exports,ot=function(){var t=this,e=t._self._c;return e("main",{staticClass:"content container"},[e("div",{staticClass:"content__top"},[t._m(0),e("h1",{staticClass:"content__title"},[t._v("Корзина")]),e("span",{staticClass:"content__info"},[t._v(" "+t._s(t.$store.state.cartProducts.length)+" "+t._s(t.getCorrectEnding(t.$store.state.cartProducts.length))+" ")])]),e("section",{staticClass:"cart"},[e("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[e("div",{staticClass:"cart__field"},[e("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return e("CartItem",{key:t.productId,attrs:{item:t}})})),1)]),e("div",{staticClass:"cart__block"},[e("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),e("p",{staticClass:"cart__price"},[t._v(" Итого: "),e("span",[t._v(t._s(t._f("numberFormat")(t.totalPrice)))])]),e("button",{staticClass:"cart__button button button--primery",attrs:{type:"submit"}},[t._v(" Оформить заказ ")])])])])])},lt=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"breadcrumbs"},[e("li",{staticClass:"breadcrumbs__item"},[e("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),e("li",{staticClass:"breadcrumbs__item"},[e("a",{staticClass:"breadcrumbs__link"},[t._v(" Корзина ")])])])}];function ct(t){const e=t%100,s=t%10;return e>=11&&e<=14?" товаров":1===s?" товар":s>=2&&s<=4?" товара":" товаров"}var nt=s(408),ut=function(){var t=this,e=t._self._c;return e("li",{staticClass:"cart__item product"},[e("div",{staticClass:"product__pic"},[e("img",{attrs:{src:t.item.product.image,width:"120",height:"120",alt:t.item.product.title}})]),e("h3",{staticClass:"product__title"},[t._v(" "+t._s(t.item.product.title)+" ")]),t._m(0),e("span",{staticClass:"product__code"},[t._v(" Артикул: "+t._s(t.item.product.id)+" ")]),e("div",{staticClass:"product__counter form__counter"},[e("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:t.decrementAmount}},[e("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-minus"}})])]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],attrs:{type:"text",name:"count"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:t.incrementAmount}},[e("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),e("b",{staticClass:"product__price"},[t._v(" "+t._s(t._f("numberFormat")(t.item.amount*t.item.product.price))+" ₽ ")]),e("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"},on:{click:function(e){return e.preventDefault(),t.deleteProduct(t.item.productId)}}},[e("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[e("use",{attrs:{"xlink:href":"#icon-close"}})])])])},_t=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"product__info"},[t._v("Объем: "),e("span",[t._v("128GB")])])}],dt={filters:{numberFormat:w},props:["item"],computed:{amount:{get(){return this.item.amount},set(t){this.$store.commit("updateCartProductAmount",{productId:this.item.productId,amount:t})}}},methods:{...(0,nt.OI)({deleteProduct:"deleteCartProduct"}),incrementAmount(){this.amount+=1},decrementAmount(){this.amount>1&&(this.amount-=1)}}},pt=dt,mt=(0,u.Z)(pt,ut,_t,!1,null,null,null),ft=mt.exports,ht={filters:{numberFormat:w},computed:{...(0,nt.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice"})},methods:{getCorrectEnding:ct},components:{CartItem:ft}},Ct=ht,vt=(0,u.Z)(Ct,ot,lt,!1,null,null,null),gt=vt.exports,bt=function(){var t=this,e=t._self._c;return e("h1",[t._v("Страница не найдена")])},kt=[],yt={},Pt=yt,xt=(0,u.Z)(Pt,bt,kt,!1,null,null,null),Ft=xt.exports;a.ZP.use(C.Z);const It=[{name:"main",component:Y,path:"/"},{name:"product",component:it,path:"/product/:id"},{name:"cart",component:gt,path:"/cart/"},{name:"notFound",component:Ft,path:"*"}],wt=new C.Z({routes:It});var zt=wt;s(7658);a.ZP.use(nt.ZP);var Tt=new nt.ZP.Store({state:{cartProducts:[]},mutations:{addProductToCart(t,{productId:e,amount:s}){const a=t.cartProducts.find((t=>t.productId===e));a?a.amount+=s:t.cartProducts.push({productId:e,amount:s})},updateCartProductAmount(t,{productId:e,amount:s}){const a=t.cartProducts.find((t=>t.productId===e));a&&(a.amount=s)},deleteCartProduct(t,e){t.cartProducts=t.cartProducts.filter((t=>t.productId!==e))}},getters:{cartDetailProducts(t){return t.cartProducts.map((t=>({...t,product:b.find((e=>e.id===t.productId))})))},cartTotalPrice(t,e){return e.cartDetailProducts.reduce(((t,e)=>e.product.price*e.amount+t),0)}}});a.ZP.config.productionTip=!1,new a.ZP({router:zt,store:Tt,render:t=>t(h)}).$mount("#app")}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,i){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],i=t[u][2];for(var l=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(l=!1,i<o&&(o=i));if(l){t.splice(u--,1);var n=r();void 0!==n&&(e=n)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,r,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,o=a[0],l=a[1],c=a[2],n=0;if(o.some((function(e){return 0!==t[e]}))){for(r in l)s.o(l,r)&&(s.m[r]=l[r]);if(c)var u=c(s)}for(e&&e(a);n<o.length;n++)i=o[n],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},a=self["webpackChunktechnozavrrr"]=self["webpackChunktechnozavrrr"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(8270)}));a=s.O(a)})();
//# sourceMappingURL=app.d43c5b34.js.map