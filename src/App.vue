<template>
  <hello-message></hello-message>
  <todo-section></todo-section>
  <todo-render-button></todo-render-button>
  <filter-value></filter-value>
</template>

<script>
import helloMessage from '@/components/helloMessage.vue'
import todoSection from '@/components/todoSection.vue'
import filterValue from '@/components/filterValue.vue'

export default {
  name: 'App',
  components: {
    helloMessage,
    todoSection,
    filterValue
  }
}
</script>

<style>

</style>
