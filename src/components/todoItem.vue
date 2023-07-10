<template>
    <li class="list-group-item" :value="value"
    style="cursor:pointer">
        <p style="display: inline-block; margin-left: 5px;" :value="value">{{ value.text }}</p>
        <todo-btns :value="value"
        @changeitem="$emit('changeitem', value)"
        @remove="$emit('remove', value)"
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
            value: {
                type: Object,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>