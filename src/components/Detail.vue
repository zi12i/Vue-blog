<template>
<div class="card">
  <div class="card-header">
    {{ 블로그글[$route.params.id].title}}
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{{ 블로그글[$route.params.id].content}}</p>
    </blockquote>
  </div>
</div>
</template>

<script>
    export default {
        name: 'Detail',
        props: {
          블로그글 : Array,
        }
    }
</script>

<style lang="scss" scoped>

</style>
