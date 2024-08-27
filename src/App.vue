<template>
  <modal-sign-in
      v-if="showModalSignIn"
      @close-modal="closeModal"
  />
  <modal-reg
      v-if="showModalReg"
      @close-modal="closeModal"
  />
<router-view @show-modal-sign-in="openModalSignIn"
             @show-modal-reg="openModalReg"
/>

</template>

<script>

import ModalReg from "@/components/MainComponents/ModalReg.vue";
import ModalSignIn from "@/components/MainComponents/ModalSignIn.vue";
import { defineComponent } from 'vue';
import MainPage from "@/pages/MainPage.vue";
import axios from "axios";
export default defineComponent ({
  components: {
    MainPage,
    ModalReg,
    ModalSignIn,
  },

  data() {
    return {
      showModalReg: false,
      showModalSignIn: false,
    }
  },
  methods: {
    openModalReg() {
      this.showModalReg = true;
      this.showModalSignIn = false;
    },
    openModalSignIn() {
      this.showModalSignIn = true;
      this.showModalReg = false;
    },

    closeModal() {
      this.showModalSignIn = false;
      this.showModalReg = false;
    },
  },
})


</script>

<style scoped>
@import "@/assets/css/index.css";
@import "@/assets/css/component/_header.css";
@import "@/assets/css/_media.css";
@import "@/assets/css/component/_kanban.css";
</style>