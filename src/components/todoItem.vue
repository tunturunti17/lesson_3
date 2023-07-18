<template>
    <li class="list-group-item" :item="item"
    style="cursor:pointer">
        <p 
        style="display: inline-block; margin-left: 5px;" :item="item"
        contenteditable="true">{{ item.text }}</p>
        <todo-btns :item="item"
        @changeitem="$emit('changeitem', item)"
        @remove="$emit('remove', item)"
        ></todo-btns>
        <formChange></formChange>
    </li>
</template>

<script>
import todoBtns from '@/components/todoBtns.vue'
import formChange from '@/components/formChange.vue'

    export default {
        name: 'todo-item',
        components: {
            todoBtns,
            formChange,
        },
        props: {
            todoitems: {
                type: Array,
            },
            item: {
                type: Object,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>