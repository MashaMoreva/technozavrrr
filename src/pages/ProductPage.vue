<template>
  <main class="content container" v-if="productLoading">
    Загрузка товара...
  </main>
  <main class="content container" v-else-if="!productData">
    Не удалось загрузить товар
  </main>
  <main class="content container" v-else>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
            {{ category.title }}
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> {{ product.title }} </a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img
            width="570"
            height="570"
            :src="product.image.file.url"
            :alt="product.title"
          />
        </div>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
        <div class="item__form">
          <form
            class="form"
            action="#"
            method="POST"
            @submit.prevent="addToCart"
          >
            <b class="item__price"> {{ product.price | numberFormat }} ₽ </b>

            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <ul class="colors">
                <li
                  class="colors__item"
                  v-for="color in availableColors"
                  :key="color.id"
                >
                  <label class="colors__label">
                    <input
                      class="colors__radio sr-only"
                      type="radio"
                      name="color-item"
                      :value="color.id"
                      :checked="currentColorId === color.id"
                      @change="updateCurrentColorId(color.id)"
                    />
                    <span
                      class="colors__value"
                      :style="{ backgroundColor: color.code }"
                    ></span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button
                  type="button"
                  aria-label="Убрать один товар"
                  @click="decrementProductAmount"
                >
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="productAmount" />

                <button
                  type="button"
                  aria-label="Добавить один товар"
                  @click="incrementProductAmount"
                >
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button
                class="button button--primery"
                type="submit"
                :disabled="productAddSending"
              >
                В корзину
              </button>
            </div>

            <div v-show="productAdded">Товар добавлен в корзину</div>
            <div v-show="productAddSending">Добавляем товар в корзину...</div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current"> Описание </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Характеристики </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Гарантия </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Оплата и доставка </a>
          </li>
        </ul>

        <div class="item__content">
          <p></p>

          <a href="#"> Все характеристики </a>

          <h3>Что это?</h3>

          <p></p>

          <h3>Дизайн</h3>

          <p></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";
import axios from "axios";
import { API_BASE_URL } from "@/config";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      productAmount: 1,
      productData: null,
      productLoading: false,
      productLoadingFaild: false,
      productAdded: false,
      productAddSending: false,
      currentColorId: null,
    };
  },
  filters: { numberFormat },
  computed: {
    product() {
      return this.productData;
    },
    category() {
      return this.productData.category;
    },
    availableColors() {
      return this.productData ? this.productData.colors : [];
    },
  },
  methods: {
    ...mapActions(["addProductToCart"]),
    gotoPage,
    addToCart() {
      this.productAdded = false;
      this.productAddSending = true;
      this.addProductToCart({
        productId: this.product.id,
        amount: this.productAmount,
      }).then(() => {
        this.productAdded = true;
        this.productAddSending = false;
      });
    },
    incrementProductAmount() {
      this.productAmount += 1;
    },
    decrementProductAmount() {
      if (this.productAmount > 1) {
        this.productAmount -= 1;
      }
    },
    updateCurrentColorId(colorId) {
      this.currentColorId = colorId;
    },
    loadProduct() {
      this.productLoading = true;
      this.productLoadingFaild = false;
      axios
        .get(API_BASE_URL + "/api/products/" + this.$route.params.id)
        .then((res) => (this.productData = res.data))
        .catch(() => (this.productLoadingFaild = true))
        .then(() => (this.productLoading = false));
    },
  },

  watch: {
    "$route.params.id": {
      handler() {
        this.loadProduct();
      },
      immediate: true,
    },
  },
};
</script>
