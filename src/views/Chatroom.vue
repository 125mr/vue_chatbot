<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
  </div>
</template>
  
<script>
import Navbar from '../components/Navbar'
import ChatWindow from '../components/ChatWindow'

export default {
  components: { Navbar, ChatWindow }
}
</script>
  
<style scoped></style>
  