
<template>
    <div>
        <input type="number" class="form-control" v-model.trim="number">
        <p>{{ $filters.filterValue(number) }}</p>
    </div>
</template>

<script>
    export default {
        name: 'filter-value',
        data() {
            return {
                number: 10000,
            }
        },
    }
</script>
<style>
</style>