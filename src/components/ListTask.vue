<template>
  <div class="list">
    <div class="list-filter">
      <select v-model="filter">
        <option 
          v-for="item in filterData"
          :key="item.number"
          :value="item.value"
        >
          {{ item.text }}
        </option>
      </select>
    </div>
    <div class="list-buttons">
      <button 
        class="clear-completed list-btn"
        @click="clearCompleted"
      >
        Clear completed
      </button>
      <button 
        class="clear-all list-btn"
        @click="clearAll"
      >
        Clear all
      </button>
    </div>

    <div v-if="!emptyList">
      <ItemTask
        v-for="item in list"
        :key="item.id"
        :task="item"
      />
    </div>
    <div v-else>
      Список пуст
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'

/* import components */
import ItemTask from '@/components/ItemTask.vue'

export default {
  name: 'ListTask',
  components: {
    ItemTask
  },
  data () {
    return {
      filter: null,
      filterData: [
        { number: 1, text: 'all', value: null },
        { number: 2, text: 'active', value: false },
        { number: 3, text: 'completed', value: true }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getList'
    ]),

    list () {
        if (this.filter === null) {
          return this.getList
        }
        return this.getList.filter(item => item.completed == this.filter)
    },
    emptyList () {
      return this.list.length === 0
    }
  },
  methods: {
    clearCompleted () {
      this.$store.dispatch('clearCompleted')
    },

    clearAll () {
      this.$store.dispatch('clearAll')
    }
  }
}
</script>
<style lang="scss" scoped>
  .list {
    padding: 20px 10px;
    
    &-filter {
      text-align: start;
      margin-bottom: 30px;

      select {
        width: 100px;
        padding: 10px 10px;
      }
    }

    &-buttons {
      width: 100%;
      justify-content: end;
      margin-bottom: 20px;
    }
    

    &-btn {
      display: block;
      margin: 10px 0;
      padding: 10px 20px;
      min-width: 150px;
      border: none;
      color: #fff;
      font-size: 15px;
      width: 150px;
      cursor: pointer;
      transition: all 0.5s;
    }
    
    
    .clear-completed {
      background-color:#24cc63;

      &:hover {
        background-color: #5bf176;
      }
    }

    .clear-all {
      background-color: #ff4b56;

      &:hover {
        background-color: #f78f78;
      }
    }
  }
</style>