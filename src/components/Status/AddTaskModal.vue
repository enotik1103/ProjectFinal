<template>
  <div class="modal--task">
    <div class="modal__container">
      <a @click="closeModal" href="#" class="close-modal">✖</a>
      <form @submit.prevent="createTask">
        <input v-model="title" type="text" id="title-task" name="title" placeholder="Введите заголовок задачи" />
        <textarea v-model="description" id="description-task" name="description" placeholder="Введите описание задачи"></textarea>
        <input v-model="date" type="date" name="date" placeholder="Выберите дату" />
        <button type="submit">Отправить</button>
        <button @click.prevent="closeModal" type="button" class="cancel-button">Отмена</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddTaskModal",
  data() {
    return {
      title: '',
      description: '',
      date: '',
    };
  },
  methods: {
    createTask() {
      this.$emit('createTask', {
        title: this.title,
        description: this.description,
        date: this.date
      });
      this.closeModal();
    },
    closeModal() {
      this.$emit('closeModal');
    },
  },
});
</script>

<style scoped>
@import "@/assets/css/component/_modal.css";
</style>
