<template>
    <todo-stat :todoitems="todoItems"></todo-stat>
    <form-add @create="addNewTodo"></form-add>
    <vue-input type="text" 
    class="form-control" 
    placeholder="Search task"
    v-model="searchQuery"></vue-input>
    <vue-select v-model="filterSelect"></vue-select>
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
const STORAGE_KEY = 'todo_storage'

export default ({
    name: 'todo-section',
    components: {
        todoStat,
        todoList,
        formAdd,
        vueInput,
        vueSelect,
    },
    data: function() {
        return {
            todoItems: [
                // {id: 1, text: 'task 1', done: false},
                // {id: 2, text: 'task 2', done: false},
                // {id: 3, text: 'task 3', done: true},
                // {id: 4, text: 'task 4', done: false},
                // {id: 5, text: 'task 5', done: false},
            ],
            filterSelect: "all",
            searchQuery: "",
        }
    },
    created() {
        this.todoItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
    },
    methods: {
        changeState(value) {
            return value.done = !value.done;
        },
        addNewTodo(item) {
            this.todoItems.push(item);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoItems));
        },
        removeItem(value) {
            this.todoItems = this.todoItems.filter(item => item.id !== value.id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todoItems));
        },
    },
})
</script>
