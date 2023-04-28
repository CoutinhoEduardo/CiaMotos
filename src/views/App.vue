

<template>
  <Home />

  <router-view/>
</template>

<script>
import motos from '../assets/jsons/motos.json'
import Home from './Home-page.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data(){
    return  {  
    motos
  } 
  },
  methods:{
   
  }
}

</script>

<style>

  .grid-motos{
    padding: 55px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 3fr);
    grid-gap: 50px;
    margin: 0 auto;
    max-width: 1000px;
    justify-content: center;
  }

  .footer{
    height: 700px;
  }

  .body{
    background-color: aliceblue;
  }

  



  /* MOBILE */


  @media (max-width: 413px) {
	
  .grid-motos{
  grid-template-columns: repeat(1, 3fr);
 
}

}

</style>



