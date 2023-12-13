<template>
  <ul class="tabs">
    <li v-for="(tab, index) in tabs" :key="index" class="tabs__item">
      <a
        class="tabs__link"
        :class="{ 'tabs__link--current': currentTab === tab.name }"
        @click="changeTab(tab.name)"
      >
        {{ tab.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: [],
    currentTab: "",
  },
  methods: {
    changeTab(tabName) {
      this.$emit("tabChange", tabName);
    },
  },
};
</script>
