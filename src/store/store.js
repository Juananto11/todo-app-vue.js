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
  }
})
