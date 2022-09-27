<template>
<div>
    <div>
        <h4>{{ 블로그글[0].title }}</h4>
        <p>{{ 블로그글[0].date }}</p>
    </div>
    <div>
        <h4>{{ 블로그글[1].title }}</h4>
        <p>{{ 블로그글[1].date }}</p>
    </div>
    <div>
        <h4>{{ 블로그글[2].title }}</h4>
        <p>{{ 블로그글[2].date }}</p>
    </div>
</div>    
</template>

<script>
    export default {
        name: 'List',
        props: {
            블로그글: Array,
        }
    }
</script>

<style lang="scss" scoped>

</style>