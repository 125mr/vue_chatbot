<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
    <h1>
        <TestComponent @toggle="toggle" message="Componentにメッセージが渡されています"/>
        <p v-if="isEnabled"></p>
    </h1>
</template>

<script>

import TestComponent from '../components/TestComponent.vue'

export default {

  components: {
    TestComponent
  },

  data () {
    return {
      title: 'コンポーネントから読み込んだ充電器',
      subtitle: 'TYPEーC',
      isEnabled: true
    }
  },
  computed: {
    text() {
        if(this.isEnabled) {
            return 'trueの値だよ'
        } else {
            return 'falseの値だよ'
        }
    }
  },
  methods: {
    toggle () {
        this.isEnabled = !this.isEnabled
    }
  }
}
</script>


<style scoped>
  p {
    font-size: 20px;
    color: red;
  }
</style>