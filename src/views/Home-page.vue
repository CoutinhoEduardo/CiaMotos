<template>
    <div class="body">
      <div class="header">
        <div>
          <Navegator></Navegator>
        </div>
      </div>
      
      <div style="height: 50vh;" class="jumbotron bg-cover text-white">
        <div class="container py-5 text-center video" style="padding: 0px !important;">
            <div class="video">
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/BU9dmACgqvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </div>

      <div class="grid-motos">
        <div v-for="moto in motos" :key="moto.index" class="grid-values">
          <Grid :nmMoto="moto.nmMoto" :nrPreco="moto.nrPreco" :dsDescription="moto.dsDescription" />
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

    .header {
     
      display: flex;
      justify-content: center;
      
    }

    .header div{
      width: 60vw;
      height: 10vh;
    }

    .header div :first-child{
      border-radius: 0px 0px 20px 20px;
    }
  
    .footer{
      height: 700px;
    }
  
    .body{
      background-image: url('../assets/imgs/background2.jpg');
    }
  
    /* MOBILE */
  
  
    @media (max-width: 413px) {
      
    .grid-motos{
    grid-template-columns: repeat(1, 3fr);
   
  }
  
  }
  
  </style>
  