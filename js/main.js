const app = new Vue({
  el: '#appVue',
  data: {
    list: [],
    newTask: '',
  },
  methods: {
    addTask: function () {
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
    removeTask: function (i) {
      this.list.splice(i, 1)
    }
  }
})