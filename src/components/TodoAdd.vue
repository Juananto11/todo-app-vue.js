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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TodoAdd',

  data () {
    return {
      newTask: ''
    }
  },

  methods: {
    // ...mapMutations(['addTask'])
    addTask () {
      this.$store.commit('addTask', this.newTask)
      this.newTask = ''
    }
  },

  computed: ({
    ...mapState(['list']),
    ...mapGetters(['completadas', 'pendientes'])
  })
}
</script>
