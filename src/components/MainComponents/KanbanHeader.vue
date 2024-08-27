<template>
  <header class="header">
    <div class="container header__container">
      <h1 class="header__title">Kanban Status</h1>
      <div class="header__option">
        <img src="@/assets/img/header/plus.svg" alt="header__icon--add" class="header__icon header__icon--add"
          @click="ModalColumn">
        <div class="header__user-icon">К.П</div>
      </div>
    </div>
  </header>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  name: 'KanbanHeader',
  methods: {
    ModalColumn() {
      this.$emit("openModalColumn");
    },
  }
})
</script>

<style scoped>
@import "@/assets/css/index.css";
@import "@/assets/css/component/_header.css";
</style>