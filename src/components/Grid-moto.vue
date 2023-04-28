<template>
    <div class="card" style="width: 18rem;">
        <img src="../assets/imgs/moto1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ nmMoto }}</h5>
          <p class="card-text">{{ dsDescription }}</p>
          <span class="badge bg-danger preco-moto">POR: R$: {{ nrPreco }} </span>
          <a style="background-image: linear-gradient(to right, #00c6ff 0%, #0072ff 51%, #00c6ff 100%); transition: .5s !important;" data-color1="#2b5876" data-color2="#4e4376" target="blank" href="https://wa.me/554131533843" class="btn btn-primary button-grid ">Chamar no WhatsApp!</a>
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

     .btn-grad{
      width: 100%;
      margin-bottom: 5px;
      height: 4vh;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: .5s !important;
      background-size: 200% auto;
      color: #fff;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;
     }

     .btn-grad:hover{
      background-position: right center;
      color: #fff;
      text-decoration: none;
     }

     .button-grid{
        width: 100% !important;
        transition: .5s;
        background-size: 200% auto;
     }

     .button-grid:hover{
        background-position: right center;
        color: #fff;
        text-decoration: none;
     }

     .card{
      min-height: 507px;
      width: 400px !important;
     }

     .card div a {
      align-self: end;
     }

    </style>
    