(function(){"use strict";var t={6942:function(t,r,a){var e=a(7195),s=function(){var t=this,r=t._self._c;return r("div",[r("header",{staticClass:"header"},[r("div",{staticClass:"header__wrapper container"},[r("span",{staticClass:"header__info"},[t._v("technozavrrr")]),t._m(0),r("a",{staticClass:"header__tel",attrs:{href:"tel:8 800 600 90 09"}},[t._v(" 8 800 600 90 09 ")]),r("CartIndicator")],1)]),r("router-view"),r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer__wrapper container"},[t._m(1),r("ul",{staticClass:"footer__social social"},[r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Вконтакте"}},[r("svg",{attrs:{width:"20",height:"11",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-vk"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Инстаграм"}},[r("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-insta"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Facebook"}},[r("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-facebook"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Twitter"}},[r("svg",{attrs:{width:"17",height:"14",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-twitter"}})])])]),r("li",{staticClass:"social__item"},[r("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Telegram"}},[r("svg",{attrs:{width:"19",height:"17",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-telegram"}})])])])]),r("p",{staticClass:"footer__desc"},[t._v(" Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. ")]),t._m(2),r("span",{staticClass:"footer__copyright"},[t._v(" © 2023 Технозавррр ")])])])],1)},o=[function(){var t=this,r=t._self._c;return r("a",{staticClass:"header__logo",attrs:{href:"#"}},[r("img",{attrs:{src:"img/svg/logo-tech.svg",alt:"Логотип интернет магазина Технозавррр",width:"190",height:"33"}})])},function(){var t=this,r=t._self._c;return r("ul",{staticClass:"footer__links"},[r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Каталог ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"tel:88006009009"}},[t._v(" 8 800 600 90 09 ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"mailto:hi@technozavrrr.com"}},[t._v(" hi@technozavrrr.com ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Распродажа ")])]),r("li",[r("a",{staticClass:"footer__link footer__link--medium",attrs:{href:"#"}},[t._v(" Заказать звонок ")])])])},function(){var t=this,r=t._self._c;return r("ul",{staticClass:"footer__data"},[r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Политика конфиденциальности ")])]),r("li",[r("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Публичная оферта ")])])])}],i=function(){var t=this,r=t._self._c;return r("router-link",{staticClass:"header__cart",attrs:{"aria-label":"Корзина с товарами",to:{name:"cart"}}},[r("svg",{attrs:{width:"30",height:"21",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-cart"}})]),r("span",{staticClass:"header__count",attrs:{"aria-label":"Количество товаров"}},[t._v(t._s(t.$store.state.cartProducts.length))])])},c=[],n={},l=n,u=a(1001),d=(0,u.Z)(l,i,c,!1,null,null,null),_=d.exports,m=a(408),p={components:{CartIndicator:_},created(){const t=localStorage.getItem("userAccessKey");t&&this.updateUserAccessKey(t),this.loadCart()},methods:{...(0,m.nv)(["loadCart"]),...(0,m.OI)(["updateUserAccessKey"])}},f=p,h=(0,u.Z)(f,s,o,!1,null,null,null),v=h.exports,C=a(2241),g=function(){var t=this,r=t._self._c;return r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top content__top--catalog"},[r("h1",{staticClass:"content__title"},[t._v("Каталог")]),r("span",{staticClass:"content__info"},[t._v(" "+t._s(t.countProducts)+" "+t._s(t.getCorrectEnding(t.countProducts))+" ")])]),r("div",{staticClass:"content__catalog"},[r("ProductFilter",{attrs:{"price-from":t.filterPriceFrom,"price-to":t.filterPriceTo,"category-id":t.filterCategoryId,"color-id":t.filterColorId},on:{"update:priceFrom":function(r){t.filterPriceFrom=r},"update:price-from":function(r){t.filterPriceFrom=r},"update:priceTo":function(r){t.filterPriceTo=r},"update:price-to":function(r){t.filterPriceTo=r},"update:categoryId":function(r){t.filterCategoryId=r},"update:category-id":function(r){t.filterCategoryId=r},"update:colorId":function(r){t.filterColorId=r},"update:color-id":function(r){t.filterColorId=r}}}),r("section",{staticClass:"catalog"},[t.productsLoading?r("div",{staticClass:"loader-container"},[r("p",{staticClass:"loader-text"},[t._v("Загрузка товаров...")])]):t._e(),t.productsLoadingFailed?r("div",[t._v(" Произошла ошибка при загрузке товаров "),r("button",{on:{click:function(r){return r.preventDefault(),t.loadProducts.apply(null,arguments)}}},[t._v("Попробовать еще раз")])]):t._e(),r("ProductList",{attrs:{products:t.products}}),r("BasePagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(r){t.page=r},expression:"page"}})],1)],1)])},b=[];const y="https://vue-study.skillbox.cc";function P(t){const r=t%100,a=t%10;return r>=11&&r<=14?" товаров":1===a?" товар":a>=2&&a<=4?" товара":" товаров"}var k=function(){var t=this,r=t._self._c;return r("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return r("ProductItem",{key:t.id,attrs:{product:t}})})),1)},I=[],x=function(){var t=this,r=t._self._c;return r("li",{staticClass:"catalog__item"},[r("router-link",{staticClass:"catalog__pic",attrs:{to:{name:"product",params:{id:t.product.id}}}},[r("img",{attrs:{src:t.product.image,alt:t.product.title}})]),r("h3",{staticClass:"catalog__title"},[r("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.product.title)+" ")])]),r("span",{staticClass:"catalog__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),r("ul",{staticClass:"colors colors--black"},t._l(t.product.colors,(function(a){return r("li",{key:a.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedColor,expression:"selectedColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:a,checked:t._q(t.selectedColor,a)},on:{change:function(r){t.selectedColor=a}}}),r("span",{staticClass:"colors__value",style:{backgroundColor:a.code}})])])})),0)],1)},D=[],F=new e.ZP;function w(t,r){F.$emit("gotoPage",t,r)}function A(t){return(new Intl.NumberFormat).format(t)}var $={props:["product"],data(){return{selectedColor:this.product.colors&&this.product.colors[0].code||null,selectedSize:this.product.sizes&&this.product.sizes[0]||null}},filters:{numberFormat:A},methods:{gotoPage:w},components:{router:sr}},T=$,Z=(0,u.Z)(T,x,D,!1,null,null,null),E=Z.exports,K={props:["products"],components:{ProductItem:E}},O=K,V=(0,u.Z)(O,k,I,!1,null,null,null),S=V.exports,L=function(){var t=this,r=t._self._c;return r("ul",{staticClass:"catalog__pagination pagination"},[r("li",{staticClass:"pagination__item"},[r("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":1===t.page},attrs:{"aria-label":"Предыдущая страница",disabled:1===t.page},on:{click:function(r){return r.preventDefault(),t.previousPage.apply(null,arguments)}}},[r("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])])]),t._l(t.pages,(function(a){return r("li",{key:a,staticClass:"pagination__item"},[r("a",{staticClass:"pagination__link",class:{"pagination__link--current":a===t.page},attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.paginate(a)}}},[t._v(" "+t._s(a)+" ")])])})),r("li",{staticClass:"pagination__item"},[r("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.page===t.pages},attrs:{href:"#","aria-label":"Следующая страница",disabled:t.page===t.pages},on:{click:function(r){return r.preventDefault(),t.nextPage.apply(null,arguments)}}},[r("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],2)},N=[],B={model:{prop:"page",event:"paginate"},props:["page","count","perPage"],computed:{pages(){return Math.ceil(this.count/this.perPage)}},methods:{paginate(t){this.$emit("paginate",t)},previousPage(){this.page>1&&this.paginate(this.page-1)},nextPage(){this.page<this.pages&&this.paginate(this.page+1)}}},q=B,M=(0,u.Z)(q,L,N,!1,null,null,null),j=M.exports,z=function(){var t=this,r=t._self._c;return r("aside",{staticClass:"filter"},[r("h2",{staticClass:"filter__title"},[t._v("Фильтры")]),r("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цена")]),r("label",{staticClass:"form__label form__label--price"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"min-price"},domProps:{value:t.currentPriceFrom},on:{input:function(r){r.target.composing||(t.currentPriceFrom=t._n(r.target.value))},blur:function(r){return t.$forceUpdate()}}}),r("span",{staticClass:"form__value"},[t._v("От")])]),r("label",{staticClass:"form__label form__label--price"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",name:"max-price"},domProps:{value:t.currentPriceTo},on:{input:function(r){r.target.composing||(t.currentPriceTo=t._n(r.target.value))},blur:function(r){return t.$forceUpdate()}}}),r("span",{staticClass:"form__value"},[t._v("До")])])]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Категория")]),r("label",{staticClass:"form__label form__label--select"},[r("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{type:"text",name:"category"},on:{change:function(r){var a=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(r){var a="_value"in r?r._value:r.value;return t._n(a)}));t.currentCategoryId=r.target.multiple?a:a[0]}}},[r("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(a){return r("option",{key:a.id,domProps:{value:a.id}},[t._v(" "+t._s(a.title)+" ")])}))],2)])]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цвет")]),r("ul",{staticClass:"colors"},t._l(t.colors,(function(a){return r("li",{key:a.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColorId,expression:"currentColorId"}],staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color"},domProps:{value:a.id,checked:t._q(t.currentColorId,a.id)},on:{change:function(r){t.currentColorId=a.id}}}),r("span",{staticClass:"colors__value",class:{"colors__value--selected":t.currentColorId===a.id},style:{backgroundColor:a.code}})])])})),0)]),r("button",{staticClass:"filter__submit button button--primery",attrs:{type:"submit"}},[t._v(" Применить ")]),r("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.reset.apply(null,arguments)}}},[t._v(" Сбросить ")])])])},U=[],G=a(4582),H={data(){return{currentPriceFrom:0,currentPriceTo:0,currentCategoryId:0,currentColorId:"",categoriesData:null,colorsData:null}},props:["priceFrom","priceTo","categoryId","colorId"],computed:{categories(){return this.categoriesData?this.categoriesData.items:[]},colors(){return this.colorsData?this.colorsData.items:[]}},watch:{priceFrom(t){this.currentPriceFrom=t},priceTo(t){this.currentPriceTo=t},categoryId(t){this.currentCategoryId=t},colorId(t){this.currentColorId=t}},methods:{submit(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:colorId",this.currentColorId)},reset(){this.$emit("update:priceFrom",0),this.$emit("update:priceTo",0),this.$emit("update:categoryId",0),this.$emit("update:colorId",0)},loadCategories(){G.Z.get(y+"/api/productCategories").then((t=>this.categoriesData=t.data))},loadColors(){G.Z.get(y+"/api/colors").then((t=>{this.colorsData=t.data}))}},created(){this.loadCategories(),this.loadColors()}},J=H,Q=(0,u.Z)(J,z,U,!1,null,null,null),R=Q.exports,W={components:{ProductList:S,BasePagination:j,ProductFilter:R},data(){return{filterPriceFrom:0,filterPriceTo:0,filterCategoryId:0,filterColorId:null,page:1,productsPerPage:3,productsData:null,productsLoading:!1,productsLoadingFailed:!1}},computed:{products(){return this.productsData?this.productsData.items.map((t=>({...t,image:t.image.file.url}))):[]},countProducts(){return this.productsData?this.productsData.pagination.total:0}},methods:{getCorrectEnding:P,loadProducts(){this.productsLoading=!0,this.productsLoadingFailed=!1,clearTimeout(this.loadProductsTimer),G.Z.get(y+"/api/products",{params:{page:this.page,limit:this.productsPerPage,categoryId:this.filterCategoryId,colorId:this.filterColorId,minPrice:this.filterPriceFrom,maxPrice:this.filterPriceTo}}).then((t=>this.productsData=t.data)).catch((()=>this.productsLoadingFailed=!0)).then((()=>this.productsLoading=!1))}},watch:{page(){this.loadProducts()},filterPriceFrom(){this.loadProducts()},filterPriceTo(){this.loadProducts()},filterCategoryId(){this.loadProducts()},filterColorId(){this.loadProducts()}},created(){this.loadProducts()}},X=W,Y=(0,u.Z)(X,g,b,!1,null,null,null),tt=Y.exports,rt=function(){var t=this,r=t._self._c;return t.productLoading?r("main",{staticClass:"content container"},[t._v(" Загрузка товара... ")]):t.productData?r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" Каталог ")])],1),r("li",{staticClass:"breadcrumbs__item"},[r("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" "+t._s(t.category.title)+" ")])],1),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link"},[t._v(" "+t._s(t.product.title)+" ")])])])]),r("section",{staticClass:"item"},[r("div",{staticClass:"item__pics pics"},[r("div",{staticClass:"pics__wrapper"},[r("img",{attrs:{width:"570",height:"570",src:t.product.image.file.url,alt:t.product.title}})])]),r("div",{staticClass:"item__info"},[r("span",{staticClass:"item__code"},[t._v("Артикул: "+t._s(t.product.id))]),r("h2",{staticClass:"item__title"},[t._v(t._s(t.product.title))]),r("div",{staticClass:"item__form"},[r("form",{staticClass:"form",attrs:{action:"#",method:"POST"},on:{submit:function(r){return r.preventDefault(),t.addToCart.apply(null,arguments)}}},[r("b",{staticClass:"item__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),r("fieldset",{staticClass:"form__block"},[r("legend",{staticClass:"form__legend"},[t._v("Цвет:")]),r("ul",{staticClass:"colors"},t._l(t.availableColors,(function(a){return r("li",{key:a.id,staticClass:"colors__item"},[r("label",{staticClass:"colors__label"},[r("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item"},domProps:{value:a.id,checked:t.currentColorId===a.id},on:{change:function(r){return t.updateCurrentColorId(a.id)}}}),r("span",{staticClass:"colors__value",style:{backgroundColor:a.code}})])])})),0)]),r("div",{staticClass:"item__row"},[r("div",{staticClass:"form__counter"},[r("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:t.decrementProductAmount}},[r("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-minus"}})])]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.productAmount,expression:"productAmount",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:t.productAmount},on:{input:function(r){r.target.composing||(t.productAmount=t._n(r.target.value))},blur:function(r){return t.$forceUpdate()}}}),r("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:t.incrementProductAmount}},[r("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),r("button",{staticClass:"button button--primery",attrs:{type:"submit",disabled:t.productAddSending}},[t._v(" В корзину ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.productAdded,expression:"productAdded"}]},[t._v("Товар добавлен в корзину")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.productAddSending,expression:"productAddSending"}]},[t._v("Добавляем товар в корзину...")])])])]),t._m(0)])]):r("main",{staticClass:"content container"},[t._v(" Не удалось загрузить товар ")])},at=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"item__desc"},[r("ul",{staticClass:"tabs"},[r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link tabs__link--current"},[t._v(" Описание ")])]),r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Характеристики ")])]),r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Гарантия ")])]),r("li",{staticClass:"tabs__item"},[r("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Оплата и доставка ")])])]),r("div",{staticClass:"item__content"},[r("p"),r("a",{attrs:{href:"#"}},[t._v(" Все характеристики ")]),r("h3",[t._v("Что это?")]),r("p"),r("h3",[t._v("Дизайн")]),r("p")])])}],et={data(){return{productAmount:1,productData:null,productLoading:!1,productLoadingFaild:!1,productAdded:!1,productAddSending:!1,currentColorId:null}},filters:{numberFormat:A},computed:{product(){return this.productData},category(){return this.productData.category},availableColors(){return this.productData?this.productData.colors:[]}},methods:{...(0,m.nv)(["addProductToCart"]),gotoPage:w,addToCart(){this.productAdded=!1,this.productAddSending=!0,this.addProductToCart({productId:this.product.id,amount:this.productAmount}).then((()=>{this.productAdded=!0,this.productAddSending=!1}))},incrementProductAmount(){this.productAmount+=1},decrementProductAmount(){this.productAmount>1&&(this.productAmount-=1)},updateCurrentColorId(t){this.currentColorId=t},loadProduct(){this.productLoading=!0,this.productLoadingFaild=!1,G.Z.get(y+"/api/products/"+this.$route.params.id).then((t=>this.productData=t.data)).catch((()=>this.productLoadingFaild=!0)).then((()=>this.productLoading=!1))}},watch:{"$route.params.id":{handler(){this.loadProduct()},immediate:!0}}},st=et,ot=(0,u.Z)(st,rt,at,!1,null,null,null),it=ot.exports,ct=function(){var t=this,r=t._self._c;return r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[t._m(0),r("h1",{staticClass:"content__title"},[t._v("Корзина")]),r("span",{staticClass:"content__info"},[t._v(" "+t._s(t.$store.state.cartProducts.length)+" "+t._s(t.getCorrectEnding(t.$store.state.cartProducts.length))+" ")])]),r("section",{staticClass:"cart"},[t.loading?r("div",[t._v("Загрузка корзины...")]):t.error?r("div",[t._v(" Произошла ошибка при загрузке корзины "),r("button",{on:{click:function(r){return r.preventDefault(),t.loadCart.apply(null,arguments)}}},[t._v("Попробовать еще раз")])]):r("div",[r("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[r("div",{staticClass:"cart__field"},[r("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return r("CartItem",{key:t.productId,attrs:{item:t}})})),1)]),r("div",{staticClass:"cart__block"},[r("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),r("p",{staticClass:"cart__price"},[t._v(" Итого: "),r("span",[t._v(t._s(t._f("numberFormat")(t.totalPrice))+" ₽")])]),r("router-link",{staticClass:"cart__button button button--primery",attrs:{to:{name:"order"},tag:"button",type:"submit",disabled:0===t.products.length}},[t._v(" Оформить заказ ")])],1)])])])])},nt=[function(){var t=this,r=t._self._c;return r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link"},[t._v(" Корзина ")])])])}],lt=function(){var t=this,r=t._self._c;return r("li",{staticClass:"cart__item product"},[r("div",{staticClass:"product__pic"},[r("img",{attrs:{src:t.item.product.image,width:"120",height:"120",alt:t.item.product.title}})]),r("h3",{staticClass:"product__title"},[t._v(" "+t._s(t.item.product.title)+" ")]),r("span",{staticClass:"product__code"},[t._v(" Артикул: "+t._s(t.item.product.id)+" ")]),r("div",{staticClass:"product__counter form__counter"},[r("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:t.decrementAmount}},[r("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-minus"}})])]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],attrs:{type:"text",name:"count"},domProps:{value:t.amount},on:{input:function(r){r.target.composing||(t.amount=t._n(r.target.value))},blur:function(r){return t.$forceUpdate()}}}),r("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:t.incrementAmount}},[r("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),r("b",{staticClass:"product__price"},[t._v(" "+t._s(t._f("numberFormat")(t.item.amount*t.item.product.price))+" ₽ ")]),r("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"},on:{click:function(r){return r.preventDefault(),t.deleteProductFromCart(t.item.product.id)}}},[r("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[r("use",{attrs:{"xlink:href":"#icon-close"}})])])])},ut=[],dt={filters:{numberFormat:A},props:["item"],computed:{amount:{get(){return this.item.amount},set(t){this.$store.dispatch("updateCartProductAmount",{productId:this.item.productId,amount:t})}}},methods:{...(0,m.nv)(["deleteProductFromCart"]),incrementAmount(){this.amount+=1},decrementAmount(){this.amount>1&&(this.amount-=1)}}},_t=dt,mt=(0,u.Z)(_t,lt,ut,!1,null,null,null),pt=mt.exports,ft={filters:{numberFormat:A},data(){return{loading:!1,error:!1}},computed:{...(0,m.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice"})},methods:{getCorrectEnding:P,loadCart(){this.loading=!0,this.error=!1,this.$store.dispatch("loadCart").then((()=>{this.loading=!1})).catch((()=>{this.loading=!1,this.error=!0}))}},created(){this.loadCart()},components:{CartItem:pt,router:sr}},ht=ft,vt=(0,u.Z)(ht,ct,nt,!1,null,null,null),Ct=vt.exports,gt=function(){var t=this,r=t._self._c;return r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[t._m(0),r("h1",{staticClass:"content__title"},[t._v("Корзина")]),r("span",{staticClass:"content__info"},[t._v(" "+t._s(t.$store.getters.cartDetailProducts.length)+" "+t._s(t.getCorrectEnding(t.$store.getters.cartDetailProducts.length))+" ")])]),r("section",{staticClass:"cart"},[r("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"},on:{submit:function(r){return r.preventDefault(),t.order.apply(null,arguments)}}},[r("div",{staticClass:"cart__field"},[r("div",{staticClass:"cart__data"},[r("BaseFormText",{attrs:{error:t.formError.name,title:"ФИО",placeholder:"Введите ваше полное имя"},model:{value:t.formData.name,callback:function(r){t.$set(t.formData,"name",r)},expression:"formData.name"}}),r("BaseFormText",{attrs:{error:t.formError.address,title:"Адрес доставки",placeholder:"Введите ваш адрес"},model:{value:t.formData.address,callback:function(r){t.$set(t.formData,"address",r)},expression:"formData.address"}}),r("BaseFormText",{attrs:{error:t.formError.phone,title:"Телефон",placeholder:"Введите ваш телефон"},model:{value:t.formData.phone,callback:function(r){t.$set(t.formData,"phone",r)},expression:"formData.phone"}}),r("BaseFormText",{attrs:{error:t.formError.email,title:"Email",placeholder:"Введи ваш Email"},model:{value:t.formData.email,callback:function(r){t.$set(t.formData,"email",r)},expression:"formData.email"}}),r("BaseFormTextarea",{attrs:{error:t.formError.comment,title:"Комментарий к заказу",placeholder:"Ваши пожелания"},model:{value:t.formData.comment,callback:function(r){t.$set(t.formData,"comment",r)},expression:"formData.comment"}})],1)]),r("div",{staticClass:"cart__block"},[t.loading?r("div",{staticClass:"loader-container"},[r("p",{staticClass:"loader-text"},[t._v("Идет оформление заказа...")])]):r("ul",{staticClass:"cart__orders"},t._l(t.$store.getters.cartDetailProducts,(function(a){return r("li",{key:a.productId,staticClass:"cart__order"},[r("h3",[t._v(t._s(a.product.title))]),r("b",[t._v(t._s(t._f("numberFormat")(a.product.price*a.amount))+" ₽")]),r("span",[t._v("Артикул: "+t._s(a.product.id))]),r("span",[t._v("Количество: "+t._s(a.amount))])])})),0),t.loading?t._e():r("div",{staticClass:"cart__total"},[r("p",[t._v(" Итого: "),r("b",[t._v(t._s(t.$store.getters.cartDetailProducts.length))]),t._v(" "+t._s(t.getCorrectEnding(t.$store.getters.cartDetailProducts.length))+" на сумму "),r("b",[t._v(t._s(t._f("numberFormat")(t.$store.getters.cartTotalPrice))+" ₽")])])]),r("button",{staticClass:"cart__button button button--primery",attrs:{type:"submit",disabled:t.loading}},[t._v(" "+t._s(t.loading?"Отправка...":"Оформить заказ")+" ")])]),t.formErrorMessage?r("div",{staticClass:"cart__error form__error-block"},[r("h4",[t._v("Заявка не отправлена!")]),r("p",[t._v(" "+t._s(t.formErrorMessage)+" ")])]):t._e()])])])},bt=[function(){var t=this,r=t._self._c;return r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])])}],yt=(a(7658),function(){var t=this,r=t._self._c;return r("BaseFormField",{attrs:{title:t.title,error:t.error}},["checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{name:"name",placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.dataValue)?t._i(t.dataValue,null)>-1:t.dataValue},on:{change:function(r){var a=t.dataValue,e=r.target,s=!!e.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);e.checked?i<0&&(t.dataValue=a.concat([o])):i>-1&&(t.dataValue=a.slice(0,i).concat(a.slice(i+1)))}else t.dataValue=s}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{name:"name",placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.dataValue,null)},on:{change:function(r){t.dataValue=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{name:"name",placeholder:t.placeholder,type:t.type},domProps:{value:t.dataValue},on:{input:function(r){r.target.composing||(t.dataValue=r.target.value)}}})])}),Pt=[],kt=function(){var t=this,r=t._self._c;return r("label",{staticClass:"form__label"},[t._t("default"),r("span",{staticClass:"form__value"},[t._v(t._s(t.title))]),t.error?r("span",{staticClass:"form__error"},[t._v(t._s(t.error))]):t._e()],2)},It=[],xt={props:["title","error"]},Dt=xt,Ft=(0,u.Z)(Dt,kt,It,!1,null,null,null),wt=Ft.exports,At={props:["title","error","placeholder","value"],components:{BaseFormField:wt},computed:{dataValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},$t={props:{type:{default:"text"}},mixins:[At]},Tt=$t,Zt=(0,u.Z)(Tt,yt,Pt,!1,null,null,null),Et=Zt.exports,Kt=function(){var t=this,r=t._self._c;return r("BaseFormField",{attrs:{title:t.title,error:t.error}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input form__input--area",attrs:{name:"comments",placeholder:t.placeholder},domProps:{value:t.dataValue},on:{input:function(r){r.target.composing||(t.dataValue=r.target.value)}}})])},Ot=[],Vt={mixins:[At]},St=Vt,Lt=(0,u.Z)(St,Kt,Ot,!1,null,null,null),Nt=Lt.exports,Bt={filters:{numberFormat:A},components:{BaseFormText:Et,BaseFormTextarea:Nt},data(){return{formData:{},formError:{},formErrorMessage:"",loading:!1}},methods:{getCorrectEnding:P,order(){this.formError={},this.formErrorMessage="",this.loading=!0,G.Z.post(y+"/api/orders",{...this.formData},{params:{userAccessKey:this.$store.state.userAccessKey}}).then((t=>{this.$store.commit("resetCart"),this.$store.commit("updateOrderInfo",t.data),this.$router.push({name:"orderInfo",params:{id:t.data.id}})})).catch((t=>{this.formError=t.response.data.error.request||{},this.formErrorMessage=t.response.data.error.message})).finally((()=>{this.loading=!1}))}}},qt=Bt,Mt=(0,u.Z)(qt,gt,bt,!1,null,null,null),jt=Mt.exports,zt=function(){var t=this,r=t._self._c;return t.$store.state.orderInfo&&!t.$store.state.orderInfoLoading?r("main",{staticClass:"content container"},[r("div",{staticClass:"content__top"},[t._m(0),r("h1",{staticClass:"content__title"},[t._v(" Заказ оформлен "),r("span",[t._v("№ "+t._s(t.$store.state.orderInfo.id))])])]),r("section",{staticClass:"cart"},[r("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[r("div",{staticClass:"cart__field"},[r("p",{staticClass:"cart__message"},[t._v(" Благодарим за выбор нашего магазина. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ")]),r("ul",{staticClass:"dictionary"},[r("li",{staticClass:"dictionary__item"},[r("span",{staticClass:"dictionary__key"},[t._v(" Получатель ")]),r("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.$store.state.orderInfo.name)+" ")])]),r("li",{staticClass:"dictionary__item"},[r("span",{staticClass:"dictionary__key"},[t._v(" Адрес доставки ")]),r("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.$store.state.orderInfo.address)+" ")])]),r("li",{staticClass:"dictionary__item"},[r("span",{staticClass:"dictionary__key"},[t._v(" Телефон ")]),r("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.$store.state.orderInfo.phone))])]),r("li",{staticClass:"dictionary__item"},[r("span",{staticClass:"dictionary__key"},[t._v(" Email ")]),r("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.$store.state.orderInfo.email)+" ")])]),r("li",{staticClass:"dictionary__item"},[r("span",{staticClass:"dictionary__key"},[t._v(" Комментарий к заказу ")]),r("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.$store.state.orderInfo.comment)+" ")])]),r("li",{staticClass:"dictionary__item"},[r("span",{staticClass:"dictionary__key"},[t._v(" Статус заказа ")]),r("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.$store.state.orderInfo.status.title)+" ")])])])]),r("div",{staticClass:"cart__block"},[r("ul",{staticClass:"cart__orders"},t._l(t.$store.state.orderInfo.basket.items,(function(a){return r("li",{key:a.id,staticClass:"cart__order"},[r("h3",[t._v(t._s(a.product.title))]),r("b",[t._v(t._s(t._f("numberFormat")(a.price*a.quantity))+" ₽")]),r("span",[t._v("Артикул: "+t._s(a.product.id))]),r("span",[t._v("Количество: "+t._s(a.quantity))])])})),0),r("div",{staticClass:"cart__total"},[t._m(1),r("p",[t._v(" Товары: "),r("b",[t._v(t._s(t.$store.state.orderInfo.basket.items.length))]),t._v(" "+t._s(t.getCorrectEnding(t.$store.state.orderInfo.basket.items.length))+" на сумму "),r("b",[t._v(t._s(t._f("numberFormat")(t.$store.state.orderInfo.totalPrice))+" ₽")])]),r("p",[t._v(" Итого: "),r("b",[t._v(t._s(t._f("numberFormat")(t.$store.state.orderInfo.totalPrice+500))+" ₽")])])])])])])]):r("main",{staticClass:"content container"},[t._m(2)])},Ut=[function(){var t=this,r=t._self._c;return r("ul",{staticClass:"breadcrumbs"},[r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),r("li",{staticClass:"breadcrumbs__item"},[r("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])])},function(){var t=this,r=t._self._c;return r("p",[t._v("Доставка: "),r("b",[t._v("500 ₽")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"loader-container"},[r("p",{staticClass:"loader-text"},[t._v("Получение данных о заказе...")])])}],Gt={filters:{numberFormat:A},created(){this.$store.state.orderInfo&&this.$store.state.orderInfo.id===this.$route.params.id||this.$store.dispatch("loadOrderInfo",this.$route.params.id)},methods:{getCorrectEnding:P}},Ht=Gt,Jt=(0,u.Z)(Ht,zt,Ut,!1,null,null,null),Qt=Jt.exports,Rt=function(){var t=this,r=t._self._c;return r("h1",[t._v("Страница не найдена")])},Wt=[],Xt={},Yt=Xt,tr=(0,u.Z)(Yt,Rt,Wt,!1,null,null,null),rr=tr.exports;e.ZP.use(C.Z);const ar=[{name:"main",component:tt,path:"/"},{name:"product",component:it,path:"/product/:id"},{name:"cart",component:Ct,path:"/cart/"},{name:"order",component:jt,path:"/order/"},{name:"orderInfo",component:Qt,path:"/order/:id"},{name:"notFound",component:rr,path:"*"}],er=new C.Z({routes:ar});var sr=er;e.ZP.use(m.ZP);var or=new m.ZP.Store({state:{cartProducts:[],userAccessKey:null,cartProductsData:[],orderInfo:null},mutations:{updateOrderInfo(t,r){t.orderInfo=r},resetCart(t){t.cartProducts=[],t.cartProductsData=[]},updateCartProductAmount(t,{productId:r,amount:a}){const e=t.cartProducts.find((t=>t.productId===r));e&&(e.amount=a)},deleteCartProduct(t,r){t.cartProducts=t.cartProducts.filter((t=>t.productId!==r))},updateUserAccessKey(t,r){t.userAccessKey=r},updateCartProductsData(t,r){t.cartProductsData=r},syncCartProducts(t){t.cartProducts=t.cartProductsData.map((t=>({productId:t.product.id,amount:t.quantity})))}},getters:{cartDetailProducts(t){return t.cartProducts.map((r=>{const a=t.cartProductsData.find((t=>t.product.id===r.productId)).product;return{...r,product:{...a,image:a.image.file.url}}}))},cartTotalPrice(t,r){return r.cartDetailProducts.reduce(((t,r)=>r.product.price*r.amount+t),0)}},actions:{loadOrderInfo(t,r){return G.Z.get(y+"/api/orders/"+r,{params:{userAccessKey:t.state.userAccessKey}}).then((r=>{t.commit("updateOrderInfo",r.data)}))},loadCart(t){return G.Z.get(y+"/api/baskets",{params:{userAccessKey:t.state.userAccessKey}}).then((r=>{t.state.userAccessKey||(localStorage.setItem("userAccessKey",r.data.user.accessKey),t.commit("updateUserAccessKey",r.data.user.accessKey)),t.commit("updateCartProductsData",r.data.items),t.commit("syncCartProducts")}))},addProductToCart(t,{productId:r,amount:a}){return G.Z.post(y+"/api/baskets/products",{productId:r,quantity:a},{params:{userAccessKey:t.state.userAccessKey}}).then((r=>{t.commit("updateCartProductsData",r.data.items),t.commit("syncCartProducts")}))},updateCartProductAmount(t,{productId:r,amount:a}){if(t.commit("updateCartProductAmount",{productId:r,amount:a}),!(a<1))return G.Z.put(y+"/api/baskets/products",{productId:r,quantity:a},{params:{userAccessKey:t.state.userAccessKey}}).then((r=>{t.commit("updateCartProductsData",r.data.items)})).catch((()=>{t.commit("syncCartProducts")}))},deleteProductFromCart(t,r){return G.Z.delete(y+"/api/baskets/products",{data:{productId:r},params:{userAccessKey:t.state.userAccessKey}}).then((()=>{t.commit("deleteCartProduct",r)})).catch((()=>{t.commit("syncCartProducts")}))}}});e.ZP.config.productionTip=!1,new e.ZP({router:sr,store:or,render:t=>t(v)}).$mount("#app")}},r={};function a(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(r,e,s,o){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],s=t[u][1],o=t[u][2];for(var c=!0,n=0;n<e.length;n++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](e[n])}))?e.splice(n--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var l=s();void 0!==l&&(r=l)}}return r}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[e,s,o]}}(),function(){a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,{a:r}),r}}(),function(){a.d=function(t,r){for(var e in r)a.o(r,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(r){return 0===t[r]};var r=function(r,e){var s,o,i=e[0],c=e[1],n=e[2],l=0;if(i.some((function(r){return 0!==t[r]}))){for(s in c)a.o(c,s)&&(a.m[s]=c[s]);if(n)var u=n(a)}for(r&&r(e);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},e=self["webpackChunktechnozavrrr"]=self["webpackChunktechnozavrrr"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(6942)}));e=a.O(e)})();
//# sourceMappingURL=app.569e3c02.js.map