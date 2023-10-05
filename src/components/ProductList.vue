<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="(product, index) of products" :key="index">
      <ProductItem :product="product" />
    </li>
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  props: ["products"],
  components: { ProductItem },
};
</script>
