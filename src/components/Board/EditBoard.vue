<template>
  <div class="modal modal--column">
    <div class="modal__container">
      <a @click="closeModal" href="#" class="close-modal">✖</a>
      <form class="form--column">
        <input v-model="name" type="text" id="name-column" name="title" placeholder="Название" />
        <input v-model="description" type="text" id="description-column" name="description" placeholder="Описание" />
        <button @click="editBoardHandler" type="button">Редактировать</button>
        <button @click.prevent="closeModal" type="button" class="cancel-button">Отмена</button>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  name: 'editBoard',
  data() {
    return {
      boardId: '',
      name: '',
      description: ''
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
      editBoard: 'boardsStore/editBoard'
    }),



    async editBoardHandler() {
      await this.editBoard({
        "formData": {
          "id": this.boardId,
          "name": this.name,
          "description": this.description
        }
      });

      this.name = '';
      this.description = '';
      this.boardId = '';
    },

    closeModal() {
      this.name = '';
      this.description = '';
      this.boardId = '';
      this.$emit('closeModal')
    }

  },

  async created() {
    await this.initBoards();
  },

})
</script>



<style scoped>
.modal--column {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255 255 255 / 33%);
  backdrop-filter: blur(15px);
}

.modal__container {
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 430px;
}

form {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
}

input[type="text"],
input[type="date"],
textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

textarea {
  resize: vertical;
}

button[type="button"] {
  padding: 10px 20px;
  background-color: #2d41a7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="button"]:hover {
  background-color: darkblue;
}


.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.cancel-button[type="button"] {
  padding: 10px 20px;
  background-color: rgb(255, 0, 64);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: darkred;
}
</style>