<template lang="pug">
  #appVue
    todo-app
</template>

<script>
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'app',
  components: {
    TodoApp
  }
}
</script>

<style lang="sass">
@import './sass/main'

</style>
