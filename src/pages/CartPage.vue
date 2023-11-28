<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html"> Каталог </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info">
        {{ $store.state.cartProducts.length }}
        {{ getCorrectEnding($store.state.cartProducts.length) }}
      </span>
    </div>

    <section class="cart">
      <div v-if="loading">Загрузка корзины...</div>
      <div v-else-if="error">
        Произошла ошибка при загрузке корзины
        <button @click.prevent="loadCart">Попробовать еще раз</button>
      </div>
      <div v-else>
        <form class="cart__form form" action="#" method="POST">
          <div class="cart__field">
            <ul class="cart__list">
              <CartItem
                v-for="item in products"
                :key="item.productId"
                :item="item"
              />
            </ul>
          </div>

          <div class="cart__block">
            <p class="cart__desc">
              Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
            </p>
            <p class="cart__price">
              Итого: <span>{{ totalPrice | numberFormat }} ₽</span>
            </p>

            <router-link
              :to="{ name: 'order' }"
              tag="button"
              class="cart__button button button--primery"
              type="submit"
              :disabled="products.length === 0"
            >
              Оформить заказ
            </router-link>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
<script>
import numberFormat from "@/helpers/numberFormat";
import getCorrectEnding from "@/helpers/getCorrectEnding";
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";
import router from "@/router";

export default {
  filters: { numberFormat },
  data() {
    return {
      loading: false,
      error: false,
    };
  },
  computed: {
    ...mapGetters({
      products: "cartDetailProducts",
      totalPrice: "cartTotalPrice",
    }),
  },
  methods: {
    getCorrectEnding,
    loadCart() {
      this.loading = true;
      this.error = false;

      this.$store
        .dispatch("loadCart")
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    },
  },
  created() {
    this.loadCart();
  },
  components: { CartItem, router },
};
</script>
