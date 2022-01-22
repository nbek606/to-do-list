<template>
  <div class="container">
      <div class="counter">
          Task ({{ list.length }})
      </div>
      <!--Create Todo-->
      <CreateTask />
      <!--List Todo-->
      <ListTask />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

/* import components */
import CreateTask from '@/components/CreateTask.vue'
import ListTask from '@/components/ListTask.vue'

export default {
  name: 'Home',
  components: {
    CreateTask,
    ListTask
  },
  computed: {
    ...mapGetters({
      list: 'getList'
    })
  }
}
</script>
<style lang="scss" scoped>
  .container {
    width: 600px;
    margin: auto;

    .counter {
      text-align: start;
      margin-left: 10px;
      font-size: 25px;
      font-weight: 600;
    }
  }
</style>
