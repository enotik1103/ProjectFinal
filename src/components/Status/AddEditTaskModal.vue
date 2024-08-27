<template>
  <div class="modal--task" @click.self="closeModal">
    <div class="modal__container">
      <a @click="closeModal" href="#" class="close-modal">✖</a>
      <form>
        <input v-model="title" type="text" id="title-task" name="title" placeholder="Измените заголовок задачи" />
        <textarea v-model="description" id="description-task" name="description" placeholder="Измените описание задачи"></textarea>
        <input v-model="date" type="date" name="date" placeholder="Выберите дату" />
        <button type="submit" @click.prevent="editTasks">Редактировать</button>
        <button @click.prevent="closeModal" type="button" class="cancel-button">Отмена</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddEditTaskModal",
  emits: ['edit-tasks'], // TODO эмиты лучше фиксировать. Ошибки не будет, но это правило
  props: {
    editTask: {
      type: Object,
      default: () => ({ title: '', description: '', date: '' })
    },
  },
  data() {
    return {
        // TODO можно данные сразу из пропса присвоить
      title: this.editTask.title,
      description: this.editTask.description,
      date: this.editTask.date,
    };
  },
    // TODO это не нужно
  // watch: {
  //   editTask: {
  //     handler(newValue) {
  //       this.title = newValue.title || '';
  //       this.description = newValue.description || '';
  //       this.date = newValue.date || '';
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    editTasks() {
      // this.$emit('editTasks', { // TODO editTasks у тебя никак не обрабатывается в родителе сейчас
      this.$emit('edit-tasks', { // TODO лучше через kebab-case делать эмиты
        title: this.title,
        description: this.description,
        date: this.date
      });
      // this.closeModal(); // TODO не обязательно выкидывать наверх, ты туда уже кидаешь эмит edit-tasks, в нем и закроем модалку
    },
  },
    mounted() {
      console.log(this.editTask);
    }
});
</script>

<style scoped>
@import "@/assets/css/component/_modal.css";
</style>
