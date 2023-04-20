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
                  <a class="nav-link active nav-itens" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-itens" href="#">Estoque</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-itens" href="#">Contato</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-itens" href="#">Financiamento</a>
                </li>
              </ul>
        </div>
        <form class="d-flex" style="margin-right: 50px">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button type="button" class="btn btn-outline-warning button-search">Pesquisar</button>
        </form>
  </nav>
  <div style="height: 50vh;" class="jumbotron bg-cover text-white">
    <div class="container py-5 text-center video" style="padding: 0px !important;">
        <div class="video">
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/BU9dmACgqvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</div>
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
  