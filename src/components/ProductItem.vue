<template>
  <li class="catalog__item">
    <router-link
      class="catalog__pic"
      :to="{ name: 'product', params: { id: product.id } }"
    >
      <img :src="product.image" :alt="product.title" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price | numberFormat }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="color"
            v-model="selectedColor"
          />
          <span class="colors__value" :style="{ backgroundColor: color }">
          </span>
        </label>
      </li>
    </ul>

    <ul class="sizes" v-if="product.sizes && product.sizes.length > 0">
      <li class="sizes__item" v-for="size in product.sizes" :key="size">
        <label class="sizes__label">
          <input
            class="sizes__radio sr-only"
            type="radio"
            :value="size"
            v-model="selectedSize"
          />
          <span class="sizes__value">
            {{ size }}
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";
import router from "@/router";

export default {
  props: ["product"],
  data() {
    return {
      selectedColor: (this.product.colors && this.product.colors[0]) || null,
      selectedSize: (this.product.sizes && this.product.sizes[0]) || null,
    };
  },
  filters: {
    numberFormat,
  },
  methods: {
    gotoPage,
  },
  components: { router },
};
</script>
