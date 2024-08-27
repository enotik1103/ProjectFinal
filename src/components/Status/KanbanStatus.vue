<template>
  <div class="kanban container">
    <section
        v-for="column in columns"
        :key="column.id"
        :class="`kanban__column kanban__column--${column.id}`"
    >
    <div class="kanban__header">

      <div class="kanban__header-content">
        
        <h1 class="kanban__title">{{ column.title }}</h1>
      </div>
      <div>
        <img
            src="@/assets/img/kanban/plus.svg"
            alt="Добавить задачу"
            class="kanban__icon kanban__icon--add"
            @click="openModalTask(column.id)"
        />
      </div>
    </div>

      <div class="kanban__list"
           v-for="task in column.tasks

">
        <div :class="`task-item task-item--${task.id + 1}`"
        @click="openEditModal(task)">
        <h3 class="task-item__title">{{task.title}}</h3>
        <p class="task-item__description">{{task.description}}</p>
        <div class="task-item__info">
          <div class="task-item__complexity complexity">
            <span :class="`complexity__dot complexity__dot--${task.complexity}`"></span>
            <span :class="`complexity__dot complexity__dot--${task.complexity}`"></span>
            <span :class="`complexity__dot complexity__dot--${task.complexity}`"></span>
          </div>
          <div class="task-item__client">{{task.date}}</div>
        </div>
        </div>
      </div>


    </section>
  </div>

</template>

<script>

export default {

  props: {
    columns: {
      type: Array,
    },
    tasks: {
      type: Array,
    },
  },
  methods: {
    openModalTask(id) {
      this.$emit('openModalTask', id);
    },
    openEditModal(task) {
      this.$emit('editModalTask', task);
    }
  }
}

</script>

<style scoped>
@import '@/assets/css/component/_kanban.css';
@import '@/assets/css/component/_task.css';
.container {
  max-width: 1320px;
}
</style>
