<template>
    <h1 v-if="todoitems.length==0">Please add new task!</h1>
    <ul v-else class="list-group">
        <todo-item v-for="value of filterTask"
        :key="value.id"
        :value="value"
        @changeitem="$emit('changeitem', value)"
        @remove="$emit('remove', value)"
        @changetext="$emit('changetext', value)"></todo-item>
    </ul>
</template>

<script>
import todoItem from '@/components/todoItem.vue'
    export default {
        name: 'todo-list',
        components: {
            todoItem,
        },
        props: {
            todoitems: {
                type: Array,
            },
            value: {
                type: Object,
            },
            filterselect: {
                type: String,
            },
            searchquery: {
                type: String,
            },
        },
        methods: {
            searchTask() {
                return this.todoitems.filter(todoItem => todoItem.text.toLowerCase().includes(this.searchquery))
            },
        },
        computed: {
            filterTask() {
                if (this.filterselect == "completed") {
                    return this.searchTask().filter((item) => item.done);
                } else if (this.filterselect == "inorder") {
                    return this.searchTask().filter((item) => !item.done);
                }  else {
                    return this.searchTask()
                }
            }
    },
    }
</script>

<style scoped>

</style>