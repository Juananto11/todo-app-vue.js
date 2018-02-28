<template lang="pug">
  div(class="add list")
    h2(v-if="list.length > 0") Listado de tareas
    h2(v-else) No hay tareas registradas
    ul
      li(v-for="task, i in list" v-bind:class="{check: task.completed}")
        label(:class="{check: task.completed}") &check;
          input(@change="task.completed = !task.completed" type="checkbox" name="check" id="check")
        | {{ task.task }}
        span(@click="removeTask(i)")
          p &cross;
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TodoList',

  methods: {
    ...mapMutations(['removeTask'])
  },

  computed: mapState(['list'])
}
</script>
