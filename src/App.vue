<template>
  <hello-message></hello-message>
  <todo-section></todo-section>
</template>

<script>
import helloMessage from '@/components/helloMessage.vue'
import todoSection from '@/components/todoSection.vue'

export default {
  name: 'App',
  components: {
    helloMessage,
    todoSection,
  }
}
</script>

<style>

</style>
