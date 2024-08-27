<template>
  <edit-board v-if="showModalEditBoard" @edit-board-handler="editBoardHandler" @close-modal="closeModal" />

  <div class="kanban container">
    <section v-for="item in boardList" :key="item.id" class="kanban__column">

      <div>
        <div class="kanban__header">
          <div class="kanban__header-content">

            <a @click="navigateToPage"><img src='@/assets/img/kanban/kanban__column--to-do.svg' alt="wewe"
                class="kanban__icon--add kanban__icon--column" width="24" height="24" /></a>
            <h2 class="kanban__title">{{ item.name }}</h2>

          </div>
        </div>
        <div>
        </div>
      </div>
      <div>
        <p class="kanban__desc">{{ item.description }}</p>
      </div>

      <div><button class="btn__edit" @click="ModalEditBoard">Редактировать</button></div>
      <div><button class="btn__delete" @click="ModalDelBoard(item.id)">Удалить</button></div>

    </section>
  </div>
  <show-board @create-new-board="addBoardHandler" @close-modal="closeModal" v-if="showModalBoard">
  </show-board>
</template>

<script>

import KanbanBoard from "@/components/Status/KanbanStatus.vue";
import KanbanFooter from "@/components/MainComponents/KanbanFooter.vue";
import AddTaskModal from "@/components/Status/AddTaskModal.vue";
import AddColumnModal from "@/components/Status/AddColumnModal.vue";
import NewColumn from "@/components/Status/AddNewColumn.vue";
import { defineComponent } from "vue";
import AddEditTaskModal from "@/components/Status/AddEditTaskModal.vue";
import MainPage from "@/pages/MainPage.vue";
import AddBoard from "@/components/Board/AddBoard.vue";
import KanbanStatus from "@/components/Status/KanbanStatus.vue";
import ShowBoard from "@/components/Board/AddBoardModal.vue";
import BoardHeader from "@/components/Board/BoardHeader.vue";
import { mapActions, mapGetters } from "vuex";
import EditBoard from "@/components/Board/EditBoard.vue";
import boards from "@/store/boards/index.js";

export default defineComponent({
  name: 'KanbanBoardContent',
  components: {
    EditBoard,
    BoardHeader,
    ShowBoard,
    KanbanStatus,
    AddBoard,
    AddEditTaskModal,
    NewColumn,
    KanbanFooter,
    KanbanBoard,
    AddTaskModal,
    AddColumnModal,
    MainPage,

  },
  data() {
    return {
      boardId: '',
      name: '',
      description: '',
      showModalBoard: false,
      showModalEditBoard: false,
    }
  },

  computed: {

    ...mapGetters({
      boardList: 'boardsStore/getBoards'
    })
  },

  methods: {
    ...mapActions({
      initBoards: 'boardsStore/initBoards',
      addBoard: 'boardsStore/addBoard',
      deleteBoard: 'boardsStore/deleteBoard',
    }),
    openModalTask(id) {
      this.$emit('openModalTask');
    },
    async deleteBoardHandler(id) {
      await this.deleteBoard(id);
    },
    ModalDelBoard(id) {
      if (confirm("Вы уверены, что хотите удалить эту задачу?")) {
        this.deleteBoardHandler(id);
      }
    },
    async addBoardHandler() {
      await this.addBoard({
        "formData": {
          "name": this.name,
          "description": this.description,
        }
      })

      this.name = '';
      this.description = '';
    },

    editModalBoard() {
      this.$emit('showModalTaskEdit')
    },

    async editBoardHandler() {
      await this.editBoard({
        "formData": {
          "id": this.boardId,
          "name": this.name,
          "description": this.description,
        }
      })

      this.name = '';
      this.description = '';
      this.boardId = '';
    },
    navigateToPage() {
      this.$router.push('/taski');
    },
    ModalEditBoard() {
      this.showModalEditBoard = true;
    },

    ModalBoard() {
      this.showModalBoard = true;
    },
    closeModal() {
      this.showModalBoard = false;
    },


  },
  async created() {
    await this.initBoards();
  }
})

</script>

<style scoped>
@import '@/assets/css/component/_kanban.css';
@import '@/assets/css/component/_task.css';


.container {
  max-width: 1320px;
}



button {
  padding: 10px 20px;
  background-color: #2d41a7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
}

.kanban__desc {
  margin-top: 0;
  font-weight: 600;
}

p {
  color: #1a0c5f;
}

.btn__edit {
  background-color: #1b42b7;
  border-radius: 15px;
}

.btn__delete {
  background-color: #893d1aa4;
  border-radius: 15px;
}
</style>
