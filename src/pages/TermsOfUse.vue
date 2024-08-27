
<template>
    <div class="page">


        <header class="navbar-logo">
            <div class="container">
                <a href="."><img src="@/assets/img/asset-auth/board-3.svg" width="60" height="67"></a>
                <a href="." style="cursor: pointer; color: black; text-decoration: none;"       >
                    <h3 class="container-b">TODO LIST</h3>
                </a>
            </div>



        </header>


        <main class="layout-main">
            <section class="hero is-info is-fullheight" style="min-height: 600px;">
                <div class="hero-body" style="background-color: #7957d5">
                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <div>
                                    <h1>Лицензионное соглашение и правила использования сервиса "TODO LIST"</h1>
                                    <h2>Введение:</h2>
                                    <p>Данное лицензионное соглашение (далее – "Соглашение") представляет собой юридическое
                                        соглашение между вами
                                        (физическим или юридическим лицом) и провайдером услуг, предоставляющим сервис "TODO
                                        LIST" (далее – "Сервис").</p>
                                    <h2>1. Предоставление лицензии:</h2>
                                    <p>При соблюдении условий настоящего Соглашения, вы получаете ограниченное,
                                        непередаваемое и неисключительное право использования Сервиса.</p>
                                    <h2>2. Правила использования:</h2>
                                    <p>2.1. Регистрация. Для использования Сервиса требуется регистрация. Вы обязуетесь
                                        предоставлять достоверную и актуальную информацию при регистрации и поддерживать ее
                                        актуальность.<br>
                                        2.2. Безопасность. Вы несете ответственность за безопасность своего аккаунта и
                                        пароля. При несанкционированном использовании вашего аккаунта немедленно уведомляйте
                                        провайдера услуг.<br>
                                        2.3. Авторские права. Вы обязуетесь соблюдать авторские права и интеллектуальную
                                        собственность, связанные с содержанием, которое вы добавляете в Сервис.<br>
                                        2.4. Запрещенное содержание. Запрещено добавление в Сервис контента, нарушающего
                                        законы или права третьих лиц, а также содержащего вирусы, вредоносные программы и
                                        т.д.</p>
                                    <h2>3. Ограничение ответственности:</h2>
                                    <p>3.1. Сервис предоставляется "как есть", без гарантий любого рода. Провайдер услуг не
                                        несет ответственности за убытки, прямые или косвенные, связанные с использованием
                                        или невозможностью использования Сервиса.<br>
                                        3.2. Провайдер услуг не гарантирует непрерывную работу Сервиса и не несет
                                        ответственности за временные перерывы, задержки или проблемы в его функционировании.
                                    </p>
                                    <h2>4. Завершение соглашения:</h2>
                                    <p>4.1. Провайдер услуг имеет право завершить это Соглашение и приостановить
                                        предоставление Сервиса в случае нарушения вами его условий.<br>
                                        4.2. После завершения Соглашения все права, предоставленные вам, прекращают свое
                                        действие, и вы обязаны прекратить использование Сервиса.</p>
                                    <h2>5. Прочие условия:</h2>
                                    <p>5.1. Изменения. Провайдер услуг вправе изменять условия Соглашения. Изменения
                                        вступают в силу с момента их публикации.<br>
                                        5.2. Применимое право. Настоящее Соглашение регулируется законами той юрисдикции, в
                                        которой провайдер услуг имеет свое место нахождения.</p>
                                    <h2>Принимая условия настоящего Соглашения, вы выражаете свое согласие с его положениями
                                        и обязуетесь соблюдать их.</h2>
                                    <p>Дата вступления в силу: 11.12.2023</p>
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

                        <div class="tl" >TODO LIST</div>
                        <br>
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
                            style="cursor: pointer; color: white; text-decoration: none;">Контент сайта лицензирован CC BY
                            NC SA 4.0</a>
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
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    line-height: 1.5;
}
h1{
    font-weight: bold;
    font-size: 2em;
}
h2{
    font-weight: bold;
    font-size: 1.7em;
}
.aboutme {
    color: inherit;
}


.navbar-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 6px;
    font-weight: 600;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.column {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    color:#000;
    margin: 0 auto
}
.tl{
    font-weight: 700;
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
    background-color: #48c78e;
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
  