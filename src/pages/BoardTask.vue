
<template>
    <div class="page">
  
  
      <header class="navbar-logo">
        <div class="container">
          <a href="." ><img src="@/assets/img/asset-auth/board-3.svg" width="60" height="67"></a>
          <a href="." style="cursor: pointer; color: white; text-decoration: none;">
            <h2 class="container-b">TODO LIST</h2>
          </a>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button @click="navigateToPage" class="button is-out">Выход</button>
            </div>
          </div>
        </div>
      </header>
  
  
      <main class="layout-main">
        <section class="hero is-info is-fullheight" style="min-height: 600px;">
          <div class="hero-body" style="background-color: #7957d5">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <div>
                    <h1 class="subtitle is-1">Статус</h1>
                    <button @click="ModalBoard" class="button is-success">Создать статус</button>
                  </div>
                  <div class="column-pic">
                    <img src="@/assets/img/asset-auth/8.png" width="900px" height="450px">
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <footer class="layout-footer">
        <section class="container-footer">
          <div class="columns-footer">
            <p>
              <div class="tl">TODO LIST</div>
                          
              Версия <a href="https://github.com/enotik1103/ProjectFinal" target="_blank"
                              style="cursor: pointer; color: white; text-decoration: none;">4.6.1</a>
              <br>
              <a href="https://github.com/enotik1103" target="_blank"
                style="cursor: pointer; color: white; text-decoration: none;">Разработчик Дмитрий Голев</a>
              <br>
              <a href="https://opensource.org/license/mit" target="_blank"
                style="cursor: pointer; color: white; text-decoration: none;">Лицензия MIT</a>
              <br>
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"
                style="cursor: pointer; color: white; text-decoration: none;">Контент сайта лицензирован CC BY NC SA 4.0</a>
              <br>
              <a @click="navigateToPage" style="cursor: pointer; color: white; text-decoration: none;">
                Условия пользования сервисом
              </a>
  
              <br>
              <a href="https://todo-list.edu-playground.ru/swagger-ui/" target="_blank"
                style="cursor: pointer; color: white; text-decoration: none;">Документация API</a>
            </p>
          </div>
        </section>
      </footer>
    </div>
  </template>
  <script>
  
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: 'BoardHeader',
    methods: {
      ModalBoard() {
        this.$emit("showModalBoard");
      },
      goToHomePage() {
        window.location.href = '/';
      },
      showModalSignOut() {
        this.goToHomePage();
      },
      navigateToPage() {
        this.$router.push('/terms');
      }
      
    }
  })
  
  </script>
  
  <style scoped>
  
  * {
    font-family: "Blinker", sans-serif;
    font-weight: 400;
    font-style: normal;
    box-sizing: inherit;
  
  
  }
  
  .navbar-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 6px;
    font-weight: 600;
  }
  .tl{
    font-weight: 700;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .column {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    margin: 0 auto
  }
  
  .button {
    background-color: #D5CCFF;
    color: white;
    font-size: 1rem;
    height: 2.5em;
    border-radius: 4px;
    cursor: pointer;
    border-color: transparent;
  
    margin-right: .5rem;
    margin-bottom: .5rem;
  }
  .button.is-success {
    background-color: #8e04ff;
    border-color: transparent;
    color: #fff;
  }
  .button.is-out {
    background-color: #9c3f15ac;
    border-color: transparent;
    color: #fff;
  }
  
  .button.is-primary {
    background-color: #4682b4;
  }
  
  .hero.is-info {
    background-color: #4682b4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    padding: 3rem;
    align-items: center;
    box-sizing: border-box;
    color: white;
  
  }
  .subtitle.is-1 {
    font-size: 3rem;
    color: black;
  }
  .container-footer {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 0 auto;
    padding: 3rem;
    align-items: center;
    box-sizing: border-box;
  
  }
  .columns {
    background-color: #9ffeb0;
    padding: 2rem;
    border-radius: 1rem;
    color: white;
  }
  .columns-footer {
    background-color: #4682b4;
    padding: 2rem;
    border-radius: 2rem;
    color: white;
  }
  
  .container-b {
  background-color: #ffffff;
  font-size: 14px;
  margin-top: 10px;
  color: #000;
  padding: 10px 16px;
  font-size: 15px;
  word-spacing: 3px;
  }
  .container a {
  text-decoration: none; 
  position: relative; 
  }
  .container a:hover {
  border-bottom: 2px solid #000;
  margin-bottom: -3px; 
  }
  </style>
  