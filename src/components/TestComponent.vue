<template>
    <div>
      (名前なし)村上璃来
    </div>

    <p>{{ message }}</p>
    <!-- <p>{{ isEnabled }}</p> -->
    <button @click="onClick">親メソッドを実行</button>
  </template>



<script>
  export default {
    props: ['message'],
    methods: {
      onClick() {
        this.$emit('toggle')
      }
    }

  }


</script>