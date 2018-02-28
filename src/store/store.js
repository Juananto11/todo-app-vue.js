import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    list: [
      {task: 'Aprender Vue', completed: true},
      {task: 'Aprender Vuex', completed: false},
      {task: 'Aprender Router', completed: false}
    ]
  },

  getters: {
    completadas: state => state.list.filter(el => el.completed).length,
    pendientes: state => state.list.filter(el => !el.completed).length
  },

  mutations: {
    removeTask: (state, i) => state.list.splice(i, 1),
    addTask (state, payload) {
      payload.trim()
      if (payload === '') {
        alert('Ingresa una tarea')
      } else {
        state.list.push({
          task: payload,
          completed: false
        })
      }
    }
  }
})
