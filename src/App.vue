<template>
  <button @click="increment"> adding +</button>
  <span> {{ counter }}</span>
  <button @click="decrement"> Subtract -</button>
</template>

<script>


export default {
  name: 'App',
  components: {},
  computed:{
    counter(){
     return this.$store.state.cnt
    },
  },
  methods:{
    increment(){
      this.$store.dispatch('increment')
    },
    decrement(){
      this.$store.dispatch('decrement')
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
