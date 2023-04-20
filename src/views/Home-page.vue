<template>
    <div class="body">
      <Navegator></Navegator>
      <div class="grid-motos">
        <div v-for="item in motos" :key="item.index" class="grid-values">
          <Grid :nmMoto="item.nmMoto" :nrPreco="item.nrPreco" :dsDescription="item.dsDescription" />
        </div>     
      </div>
      <div class="footer bg-dark">
        <button v-on:click="printObj()">botao</button>
        <Footer></Footer>
      </div>
    </div>
</template>
  
  <script>
  import Navegator from '../components/Navegator-nav.vue'
  import Grid from '../components/Grid-moto.vue'
  import Footer from '../components/Footer-cia.vue'
  import motos from '../assets/jsons/motos.json'
  
  export default {
    name: 'Home-page',
    components: {
      Navegator,
      Grid,
      Footer
    },
    data(){
      return  {  
      motos
    } 
    },
    methods:{
      printObj(){
        let objeto = motos
        console.log(objeto)
      }
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
  