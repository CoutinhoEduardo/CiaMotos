<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <ul class="nav"  style="display: flex; align-items: center;">
            <li class="nav-item">
                <a class="navbar-brand nav-link active" href="#">
                    <img
                    src="../assets/imgs/logo.png"
                    height="70"
                    alt="MDB Logo"
                    loading="lazy"
                    />
                </a>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link active nav-itens" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link active nav-itens" aria-current="page">Estoque</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/src/views/Contato-page.vue" class="nav-link active nav-itens" aria-current="page">Contato</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-itens" href="#">Financiamento</a>
            </li>
       </ul>
    </div>
  </nav>
  
  <router-view/>
</template>
  
  <script>
  

  export default {
    name: 'Navegator-nav',

    components: 
    {
     
    },
    data()
    {
    
    }
}
  </script>
  
  <style>

    .nav-itens{
      color:rgb(255, 172, 18) !important;
      
    }
    .button-search{
      border-color: rgb(255, 172, 18) !important;
      color: rgb(255, 172, 18)!important;
    }

    .button-search:hover{
      background-color:rgb(255, 172, 18) !important ;
      color: black !important;
    }

    .video{
      padding: 0px !important;
      margin: 0px !important;
      max-width: 100vw !important;
    }
    .bg-cover {
        background-size: cover !important;
    }

    .search{
      align-items: end;
    }


    body {
      min-height: 100vh;
    }
  </style>
  