<template lang="pug">
  div.add
    h2(v-if="list.length > 0") Agregar una tarea
    h2(v-else) Crear una tarea
    input(type="text" name="text" placeholder="Ingresa una tarea" v-model="newTask" @keyup.enter="addTask")
    button(@click="addTask") Agregar tarea
</template>

<script>
export default {
  name: 'TodoAdd',
  props: ['list'],
  data () {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask === '') {
        alert('Ingresa una tarea')
      } else {
        this.list.push({
          task: this.newTask,
          completed: false
        })
      }
      this.newTask = ''
    }
  }
}
</script>
