<template>
    <div class="task">
        <div 
          class="task-title"
          :class="{ completed: task.completed === true}"
          @click="changeCompletedStatus"
        >
          {{ task.title }}
        </div>
        <button
          class="task-remove"
          @click="removeById"
        >
          Remove
        </button>
    </div>
</template>
<script>
export default {
  name: 'ItemTask',
  props: {
    task: {
      type: [Object],
      required: true
    }
  },
  methods: {
    removeById () {
      this.$store.dispatch('removeById', this.task.id)
    },
    changeCompletedStatus () {
      this.$store.dispatch('changeCompletedStatus', { 
        id: this.task.id,
        completedStatus: true 
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .task {
    display: flex;
    width: 100%;
    margin-bottom: 5px;

    &-title {
      width: 100%;
      background-color: #d20d7b;
      font-size: 20px;
      padding: 10px 0;
      color: #fff;
    }
    
    &-remove {
      border: none;
      background-color: #333;
      color: #fff;
      width: 80px;
      font-size: 16px;
      cursor: pointer;
    }
    .completed {
      background-color: #008ecf !important;
    }    
  }
</style>