<template lang="pug">
  .todo
    h1.title ToDo APP
    .container
      todo-add(:list="list")
      todo-list(:list="list")
    footer.footer
      p Powered by
        a(href="https://vuejs.org/" target="_black") Vue.js
</template>

<script>
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

export default {
  name: 'TodoApp',
  components: {
    TodoAdd,
    TodoList
  },
  data () {
    return {
      list: []
    }
  }
}
</script>
