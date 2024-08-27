<template>

  <show-board
      @create-new-board="addBoardHandler"
      @close-modal="closeModal"
      v-if="showModalBoard">
  </show-board>

  <section>
    <board-header
        @show-modal-board="ModalBoard"
        @close-modal="closeModal"

    />
    <div class="container">
<kanban-board-content/>
    </div>
    <kanban-footer/>
  </section>


</template>

<script>

import KanbanBoard from "@/components/Status/KanbanStatus.vue";
import KanbanFooter from "@/components/MainComponents/KanbanFooter.vue";
import NewColumn from "@/components/Status/AddNewColumn.vue";
import {defineComponent} from "vue";
import MainPage from "@/pages/MainPage.vue";
import axios from "axios";
import AddBoard from "@/components/Board/AddBoard.vue";
import KanbanStatus from "@/components/Status/KanbanStatus.vue";
import ShowBoard from "@/components/Board/AddBoardModal.vue";
import BoardHeader from "@/components/Board/BoardHeader.vue";
import KanbanBoarder from "@/components/Board/KanbanBoard.vue";
import KanbanBoardContent from "@/components/Board/KanbanBoard.vue";
import EditBoard from "@/components/Board/EditBoard.vue";

export default defineComponent ({
  components: {
    EditBoard,
    KanbanBoardContent,
    KanbanBoarder,
    BoardHeader,
    ShowBoard,
    KanbanStatus,
    AddBoard,
    NewColumn,
    KanbanFooter,
    KanbanBoard,
    MainPage,

  },
  props: {
    boards: {
      type: Array,

    }
  },
  computed: {
    boardList: 'boardsStore/getBoards'
  },

  data() {
    return {
      editTask: null,
      currentBoardId: null,
      showModalBoard: false,
      showModalEditBoard: false,
      boards: [
      ],
      boardIdCounter: 0,
    }
  },
  methods: {
    boardId: '',

    ModalBoard() {
      this.showModalBoard = true;
    },
    closeModal() {
      this.showModalBoard = false;
    },



    async editBoardHandler() {
      await this.editBoard({
        "formData": {
          "id": this.boardId,
          "name": this.name,
          "description": this.description
        }
      })

      this.name = '';
      this.description = '';
      this.boardId = '';
    },


    async AddBoardHandler() {
      await this.addBoard({
        "formData": {
          "name": this.name,
          "description": this.description
        }
      })

      this.name = '';
      this.description = '';
    },

    editModalBoard() {
      this.$emit('showModalTaskBoard', id)
    },

    editModalTask() {
      this.showModalEditTask = true;
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
