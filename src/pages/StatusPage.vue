<template>
  <add-task-modal
      @create-task="createTask"
      @close-modal="closeModal"
      v-if="showModalTask"
  >
  </add-task-modal>

  <add-edit-task-modal
      @close-modal="closeModal"
      v-if="showModalEditTask"
      @edit-tasks="editTaskHandler"
      :edit-task="editTask"
  >
  </add-edit-task-modal>

  <new-column>

  </new-column>

  <add-column-modal
      @create-new-columns="createNewColumn"
      @close-modal="closeModal"
      v-if="openModalColumn">
  </add-column-modal>

  <section>
    <kanban-header
        @open-modal-column="showModalColumn"
        @close-modal="closeModal"

    />
    <div class="container">
      <KanbanStatus @open-modal-task="openModalTask"  :columns="this.columns" @edit-modal-task="editModalTask"/>
    </div>
    <kanban-footer/>
  </section>


</template>

<script>

import KanbanHeader from "@/components/MainComponents/KanbanHeader.vue";
import KanbanBoard from "@/components/Status/KanbanStatus.vue";
import KanbanFooter from "@/components/MainComponents/KanbanFooter.vue";
import AddTaskModal from "@/components/Status/AddTaskModal.vue";
import AddColumnModal from "@/components/Status/AddColumnModal.vue";
import NewColumn from "@/components/Status/AddNewColumn.vue";
import {defineComponent} from "vue";
import AddEditTaskModal from "@/components/Status/AddEditTaskModal.vue";

import MainPage from "@/pages/MainPage.vue";
import axios from "axios";
import KanbanStatus from "@/components/Status/KanbanStatus.vue";

export default defineComponent ({
  components: {
    KanbanStatus,
    AddEditTaskModal,
    NewColumn,
    KanbanFooter,
    KanbanBoard,
    KanbanHeader,
    AddTaskModal,
    AddColumnModal,

    MainPage,

  },
  data() {
    return {
      editTask: null,
      currentColumnId: null,
      currentTaskId: null,
      showModalTask: false,
      openModalColumn: false,
      showModalEditTask: false,
      columnId: '',
      columns: [

      ],


      tasks: [


      ],

      taskIdCounter: 0,
      columnIdCounter: 4, // Учитывая, что у нас уже есть 3 колонки
    }
  },
  methods: {
    openModalTask(id) {
      this.columnId = id
      this.showModalTask = true
    },

    showModalColumn() {
      this.openModalColumn = true;
    },
    closeModal() {
      this.showModalTask = false;
      this.openModalColumn = false;
      this.showModalSignIn = false;
      this.showModalReg = false;
      this.showModalEditTask = false;
    },

    createNewColumn(data) {
      data.id = this.columnIdCounter++;
      this.columns.push(data);
      this.closeModal();
    },

    createTask(item) {
      item.id = this.taskIdCounter++;
      this.columns.find(column => column.id === this.columnId).tasks.push(item)
    },

    editModalTask(item) {
      this.editTask = item;
      this.closeModal();
      this.showModalEditTask = true;

      // TODO я так и не понял зачем это, ну ладно)
      // this.closeModal();
      // this.columns.find(column => column.id === this.columnId).tasks.push(item);
    },

      // TODO добавил само редактирование задачи
      editTaskHandler(item) {
        this.showModalEditTask = true;

        this.closeModal();
        console.log(item);
        // TODO тут в переменной item придут уже отредактированные данные.
          // тебе надо при добавлении задачи еще делать ей какой нибудь айдишник
          // так как без него теперь при редактировании ты не сможешь найти задачу, у тебя нет уникального поля

          // вообщем при добавлении задачи довь еще поле id и генери туда чято нибудь уникальное. При редактировании логика верна, то нужен адишник чтобы найти задачу в массиве и изменить ее.
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
