<template>
  <main
    class="content container"
    v-if="$store.state.orderInfo && !$store.state.orderInfoLoading"
  >
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

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ $store.state.orderInfo.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. Наши менеджеры свяжутся
            с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key"> Получатель </span>
              <span class="dictionary__value">
                {{ $store.state.orderInfo.name }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Адрес доставки </span>
              <span class="dictionary__value">
                {{ $store.state.orderInfo.address }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Телефон </span>
              <span class="dictionary__value">
                {{ $store.state.orderInfo.phone }}</span
              >
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Email </span>
              <span class="dictionary__value">
                {{ $store.state.orderInfo.email }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Комментарий к заказу </span>
              <span class="dictionary__value">
                {{ $store.state.orderInfo.comment }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Статус заказа </span>
              <span class="dictionary__value">
                {{ $store.state.orderInfo.status.title }}
              </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li
              v-for="item in $store.state.orderInfo.basket.items"
              :key="item.id"
              class="cart__order"
            >
              <h3>{{ item.product.title }}</h3>
              <b>{{ (item.price * item.quantity) | numberFormat }} ₽</b>
              <span>Артикул: {{ item.product.id }}</span>
              <span>Количество: {{ item.quantity }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>
              Товары:
              <b>{{ $store.state.orderInfo.basket.items.length }}</b>
              {{ getCorrectEnding($store.state.orderInfo.basket.items.length) }}
              на сумму
              <b>{{ $store.state.orderInfo.totalPrice | numberFormat }} ₽</b>
            </p>
            <p>
              Итого:
              <b
                >{{
                  ($store.state.orderInfo.totalPrice + 500) | numberFormat
                }}
                ₽</b
              >
            </p>
          </div>
        </div>
      </form>
    </section>
  </main>
  <main class="content container" v-else>
    <div class="loader-container">
      <p class="loader-text">Получение данных о заказе...</p>
    </div>
  </main>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";
import getCorrectEnding from "@/helpers/getCorrectEnding";

export default {
  filters: { numberFormat },
  created() {
    if (
      this.$store.state.orderInfo &&
      this.$store.state.orderInfo.id === this.$route.params.id
    ) {
      return;
    }
    this.$store.dispatch("loadOrderInfo", this.$route.params.id);
  },
  methods: {
    getCorrectEnding,
  },
};
</script>
