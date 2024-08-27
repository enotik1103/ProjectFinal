

<template>
  <div class="container-box">

    <div @submit.prevent="requestPost" class="box" style="min-width: 380px;">
      <div class="in">
        <h1 align="center">Вход</h1>
      </div>
      <div>
        <div class="field">
          <div class="label">Почта</div>
          <div class="control has-icons-left has-icons-right">
            <span class="icon is-small">
              <i class="mdi mdi-account"></i>
            </span>
            <input v-model="email" type="email" placeholder="E-mail" class="input">
          </div>
        </div>

        <div class="field">
          <div class="label">Пароль</div>
          <div class="control has-icons-left has-icons-right">
            <span class="icon is-small">
              <i class="mdi mdi-account"></i>
            </span>
            <input v-model="password" type="password" placeholder="*******" class="input" required>
          </div>
        </div>
        <div class="buttons-container">
          <button class="button is-primary mt-1" @click.prevent="requestPost"> Войти </button>
          <button class="button is-primary mt-2" @click="closeModal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
import { defineComponent } from 'vue'
import router from "@/router/router.js";
import "@/axios.js"

export default defineComponent({
  name: 'ModalSignIn',

  data() {
    return {
      email: '',
      password: '',
    }
  },



  methods: {
    requestPost() {
      axios.post('auth/signin', {
        formData: {
          email: this.email,
          password: this.password,
        }

      })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId);
          console.log(response);
          this.$router.push('/board');
          this.$emit('closeModal');
        })
        .catch((error) => {
          console.log(error);
        })
    },

    closeModal() {
      this.$emit('closeModal');
    }
  }
})
</script>



<style scoped>
.container-box {
  font-family: Bradley Hand, cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 28%;
  right: 25%;
  left: 60%;
  bottom: 15%;
  width: 31%;
  height: 53%;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  border: 1px solid rgba(255, 255, 255, 0.26);
}


.control.has-icons-left .icon,
.control.has-icons-right .icon {
  color: #dbdbdb;
  height: 2.5em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2.5em;
  z-index: 5;
}

.input {
  min-width: 95%;
  width: 95%;
  padding: 7px;
  border-radius: 6px;
  font-size: 16px;
  background: #fbfbfb;
  border: 2px solid transparent;
  height: 36px;
  box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);

  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }

}

.in {
  text-align: center;
}

.field:not(:last-child) {
  margin-bottom: .75rem;
}

.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.button.is-primary {
  background-color: #169ac6;
  border-color: transparent;
  color: #fff;
  box-shadow: 7px 5px 8px #C0C0C0;
  width: 125px;
  height: 30px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;


}

.button.is-primary.mt-2 {
  background-color: #893d1a;
}



.button {
  background-color: #D5CCFF;
  color: white;
  font-size: 1rem;
  height: 2.5em;
  border-radius: 17px;
  cursor: pointer;
  border-color: transparent;

  margin-right: .5rem;
  margin-bottom: .5rem;
}

.mdi-account {
  width: 40px;
  height: 40px;
}

.control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
}</style>
