Vue.component('todo-app', {
  props: ['list'],
  template: '#todo-app',
})

Vue.component('todo-add', {
  props: ['list'],
  template: '#todo-add',
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.task === '') {
        alert('Ingresa una tarea')
      } else {
        this.list.push({
          task: this.newTask,
          completed: false
        })
      }
      this.newTask = ''
    },
  }
})

Vue.component('todo-list', {
  props: ['list'],
  template: '#todo-list',
  methods: {
    removeTask (i) {
      this.list.splice(i, 1)
    }
  }
})

const app = new Vue({
  el: '#appVue',
  data () {
    return {
      list: []
    }
  }
})
