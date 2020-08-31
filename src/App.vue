<template>
  <div id="app">
    <login v-if='islogin' />
    <layout v-else  />
  </div>
</template>

<script>
import layout from './components/layout/layout.vue'
import login from '@/views/login.vue'
export default {
  components:{
    layout,
    login
  },
  computed:{
    islogin(){
      return this.$route.path=='/login'
    }
  }
}
</script>

<style>
</style>
