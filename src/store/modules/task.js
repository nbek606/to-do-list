const state = {
  list: [],
  lastId: 0
}

const mutations = {
  createTask: (state, payload) => { 
    state.list.push(payload)
    state.lastId++
  },

  changeCompletedStatus: (state, { id, completedStatus }) => { 
    state.list.forEach((item) => { 
      if (item.id === id){ 
        item.completed = completedStatus
      }
    });
  },

  removeById: (state, id) => {
    state.list = state.list.filter(item => item.id !== id)
  },
  
  clearCompleted: (state) => {
    state.list = state.list.filter(item => item.completed !== true)
  },

  clearAll: (state) => {
    state.list = []
  }
}

const actions = {
  createTask: ({ commit, getters }, payload) => {
    let newTask = {
      id: getters.getLastId + 1,
      title: payload,
      completed: false
    }

    commit('createTask', newTask)  
  },

  changeCompletedStatus: ({ commit }, payload) => {
    commit('changeCompletedStatus', payload)
  },

  removeById: ({ commit }, id) => {
    commit('removeById', id)
  },

  clearCompleted: ({ commit }) => {
    commit('clearCompleted')
  },

  clearAll: ({ commit }) => {
    commit('clearAll')
  }
}

const getters = {
  getList: state => state.list,
  getLastId: state => state.lastId
}

export default{
  state,
  mutations,
  actions,
  getters
}