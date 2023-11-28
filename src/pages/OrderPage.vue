<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html"> Каталог </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html"> Корзина </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Оформление заказа </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info">
        {{ $store.getters.cartDetailProducts.length }}
        {{ getCorrectEnding($store.getters.cartDetailProducts.length) }}
      </span>
    </div>

    <section class="cart">
      <form
        class="cart__form form"
        action="#"
        method="POST"
        @submit.prevent="order"
      >
        <div class="cart__field">
          <div class="cart__data">
            <BaseFormText
              v-model="formData.name"
              :error="formError.name"
              title="ФИО"
              placeholder="Введите ваше полное имя"
            />

            <BaseFormText
              v-model="formData.address"
              :error="formError.address"
              title="Адрес доставки"
              placeholder="Введите ваш адрес"
            />

            <BaseFormText
              v-model="formData.phone"
              :error="formError.phone"
              title="Телефон"
              placeholder="Введите ваш телефон"
            />

            <BaseFormText
              v-model="formData.email"
              :error="formError.email"
              title="Email"
              placeholder="Введи ваш Email"
            />

            <BaseFormTextarea
              v-model="formData.comment"
              :error="formError.comment"
              title="Комментарий к заказу"
              placeholder="Ваши пожелания"
            />
          </div>
        </div>

        <div class="cart__block">
          <div v-if="loading" class="loader-container">
            <p class="loader-text">Идет оформление заказа...</p>
          </div>
          <ul class="cart__orders" v-else>
            <li
              class="cart__order"
              v-for="item in $store.getters.cartDetailProducts"
              :key="item.productId"
            >
              <h3>{{ item.product.title }}</h3>
              <b>{{ (item.product.price * item.amount) | numberFormat }} ₽</b>
              <span>Артикул: {{ item.product.id }}</span>
              <span>Количество: {{ item.amount }}</span>
            </li>
          </ul>

          <div class="cart__total" v-if="!loading">
            <p>
              Итого:
              <b>{{ $store.getters.cartDetailProducts.length }}</b>
              {{ getCorrectEnding($store.getters.cartDetailProducts.length) }}
              на сумму
              <b>{{ $store.getters.cartTotalPrice | numberFormat }} ₽</b>
            </p>
          </div>

          <button
            class="cart__button button button--primery"
            type="submit"
            :disabled="loading"
          >
            {{ loading ? "Отправка..." : "Оформить заказ" }}
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
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
import BaseFormText from "@/components/BaseFormText.vue";
import BaseFormTextarea from "@/components/BaseFormTextarea.vue";
import { API_BASE_URL } from "@/config";
import numberFormat from "@/helpers/numberFormat";
import getCorrectEnding from "@/helpers/getCorrectEnding";
import axios from "axios";

export default {
  filters: { numberFormat },
  components: { BaseFormText, BaseFormTextarea },
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: "",
      loading: false,
    };
  },
  methods: {
    getCorrectEnding,
    order() {
      this.formError = {};
      this.formErrorMessage = "";
      this.loading = true;
      axios
        .post(
          API_BASE_URL + "/api/orders",
          {
            ...this.formData,
          },
          {
            params: {
              userAccessKey: this.$store.state.userAccessKey,
            },
          }
        )
        .then((res) => {
          this.$store.commit("resetCart");
          this.$store.commit("updateOrderInfo", res.data);
          this.$router.push({ name: "orderInfo", params: { id: res.data.id } });
        })
        .catch((error) => {
          this.formError = error.response.data.error.request || {};
          this.formErrorMessage = error.response.data.error.message;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
