<template>
  <div class="create">
      <input 
        v-model="title"
        class="create-input"
        placeholder="Create task"
      />
      <button
        class="create-button"
        @click="createTask"
      >
        +
      </button>
  </div>
</template>
<script>

export default {
  name: 'CreateTask',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    createTask() {
      if (this.title != '') {
        this.$store.dispatch('createTask', this.title)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .create {
    padding: 20px 10px;
    display: flex;

    &-button {
      width: 80px;
      height: 40px;
      border: none;
      background: #333;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
    }

    &-input {
      width: 100%;
      border-radius: 0;
      border: 1px solid silver;
      border-right: 0;
      padding-left: 10px;
      font-size: 18px;
    }

  }
</style>