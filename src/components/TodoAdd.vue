<template lang="pug">
  div.add
    h2(v-if="list.length > 0") Agregar una tarea
    h2(v-else) Crear una tarea
    input(type="text" name="text" placeholder="Ingresa una tarea" v-model="newTask" @keyup.enter="addTask")
    button(@click="addTask") Agregar tarea
    .dataTask(v-if="list.length > 0")
      small.tareas Tareas: {{ list.length }}
      small.completadas Completadas: {{ completadas }}
      small.pendientes Pendientes: {{ pendientes }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TodoAdd',

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
  },

  computed: mapState({
    list: state => state.list,
    completadas () {
      return this.list.map(el => el.completed).filter(el => el === true).length
    },
    pendientes () {
      return this.list.map(el => el.completed).filter(el => el === false).length
    }
  })
}
</script>
