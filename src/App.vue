<template>
  <div>
    <div>
      <h1>播放器</h1>
      <Player/>
    </div>
  </div>
</template>

<script>
  import Player from '@/components/player';



  export default {
    data(){
      return{}
    },
    components:{
      Player
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
