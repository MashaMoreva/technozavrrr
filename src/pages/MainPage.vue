<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info">
        {{ countProducts }} {{ getCorrectEnding(countProducts) }}
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :color-id.sync="filterColorId"
      />
      <section class="catalog">
        <div v-if="productsLoading" class="loader-container">
          <p class="loader-text">Загрузка товаров...</p>
        </div>
        <div v-if="productsLoadingFailed">
          Произошла ошибка при загрузке товаров
          <button @click.prevent="loadProducts">Попробовать еще раз</button>
        </div>
        <ProductList :products="products" />
        <BasePagination
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<style>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader-text {
  font-family: "PressStart";
}
</style>

<script>
import { API_BASE_URL } from "../config";
import getCorrectEnding from "@/helpers/getCorrectEnding";
import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/BasePagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import axios from "axios";

export default {
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: null,
      page: 1,
      productsPerPage: 3,
      productsData: null,
      productsLoading: false,
      productsLoadingFailed: false,
    };
  },
  computed: {
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => {
            return {
              ...product,
              image: product.image.file.url,
            };
          })
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    getCorrectEnding,
    loadProducts() {
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      clearTimeout(this.loadProductsTimer);
      axios
        .get(API_BASE_URL + "/api/products", {
          params: {
            page: this.page,
            limit: this.productsPerPage,
            categoryId: this.filterCategoryId,
            colorId: this.filterColorId,
            minPrice: this.filterPriceFrom,
            maxPrice: this.filterPriceTo,
          },
        })
        .then((res) => (this.productsData = res.data))
        .catch(() => (this.productsLoadingFailed = true))
        .then(() => (this.productsLoading = false));
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterColorId() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
