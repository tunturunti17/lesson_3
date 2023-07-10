<template>
    <div class="todo-btns">
        <vue-btn type="button" 
        :class="value.done ? 'btn btn-success' : 'btn btn-secondary'"
        @click="$emit('changeitem', value)">
        {{ value.done ? 'completed' : 'in order' }}
        </vue-btn>
        <vue-btn type="button"
        class="btn btn-info"
        :value="value"
        @click="$emit('changetext', value)">Edit</vue-btn>
        <vue-btn type="button"
        class="btn btn-danger"
        :value="value"
        @click="$emit('remove', value)">Delete</vue-btn>
    </div>
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
    export default {
        name: 'todo-btns',
        components:{
            vueBtn
        },
        props: {
            value: {
                type: Object,
            },
        },
    }
</script>

<style scoped>
.todo-btns{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>