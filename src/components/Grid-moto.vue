<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/imgs/moto1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ nmMoto }}</h5>
          <p class="card-text">{{ dsDescription }}</p>
          <span class="badge bg-danger preco-moto">POR: R$: {{ nrPreco }} </span>
          <a target="blank" href="https://wa.me/554131533843" class="btn btn-primary button-grid">Chamar no WhatsApp!</a>
        </div>
    </div>
</template>
    
    <script>
    
  
    export default {
      name: 'Grid-moto',
  
      components: 
      {
       
      },
      props:{
        id:{
          type: Number,
          default: 0
        },
        nmMoto:{
          type: String,
          default: ''
        },
        dsDescription:{
          type: String,
          default: ''
        },
        nrPreco:{
          type: String,
          default: ''
        },
        urlImg:{
          type: String,
          default: ''
        }
      },  
      data()
      {
      
      }
  }
    </script>
    
    <style>
     .preco-moto{
        width: 100% !important;
        height: 35px !important;
        font-size: 15px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin-bottom: 5px !important;
     }

     .button-grid{
        width: 100% !important;
     }

     .card{
      min-height: 507px;
      width: 400px !important;
     }

     .card div a {
      align-self: end;
     }

    </style>
    