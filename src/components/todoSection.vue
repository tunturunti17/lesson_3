<template>
    <todo-stat :todoitems="todoItems"></todo-stat>
    <form-add @create="addNewTodo"
    ></form-add>
    <vue-input type="text"
    class="form-control" 
    placeholder="Search task"
    v-model="searchQuery"></vue-input>
    <vue-select v-mousemove v-model="filterSelect"></vue-select>
    <todo-list :todoitems="todoItems" @changeitem="changeState"
    :filterselect="filterSelect"
    :searchquery="searchQuery"
    @remove="removeItem"
    @changetext="changeText"
    ></todo-list>
</template>


<script>
import todoStat from '@/components/todoStat.vue'
import todoList from '@/components/todoList.vue'
import formAdd from '@/components/formAdd.vue'
import vueInput from '@/components/UI/myInput.vue'
import vueSelect from '@/components/UI/mySelected.vue'
import lifecycle  from '@/components/mixins/lifeCycle.js'
const STORAGE_KEY = 'todo_storage'

export default ({
    name: 'todo-section',
    setup(instance) {
        lifecycle(instance)

        return {};
    },
    components: {
        todoStat,
        todoList,
        formAdd,
        vueInput,
        vueSelect,
    },
    data: function() {
        return {
            todoItems: [],
            filterSelect: "all",
            searchQuery: "",
        }
    },
    created() {
        this.todoItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
    },
    methods: {
        changeState(item) {
            return item.done = !item.done;
        },
        addNewTodo(item) {
            this.todoItems.push(item);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoItems));
        },
        removeItem(item) {
            this.todoItems = this.todoItems.filter(i => i.id !== item.id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoItems));
        },
    },
})
</script>
