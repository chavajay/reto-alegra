<template>
    <div class="card-container">
      <div class="card" @click="redirectToSearchImages">
        <div class="card-header">
          CARRERA DE IMAGENES
        </div>
        <div class="card-body">
          Haz clic para ir a la página de búsqueda de imágenes
        </div>
      </div>
  
      <div class="card" @click="redirectToCreateVendedores">
        <div class="card-header">
         VENDEDORES
        </div>
        <div class="card-body">
          Haz clic para ir a la página de ver / creación de vendedores
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToSearchImages() {
        this.$router.push('/search')
      },
      redirectToCreateVendedores() {
        this.$router.push('/sellers')
      }
    }
  }
  </script>
  
  <style>
 .card {
  width: 300px;
  background-color: #6ae9aa;
  border: 1px solid #9ee2a7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
}

.card-header {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content {
  font-size: 1em;
  color: #333;
  line-height: 1.4;
}

.card-footer {
  margin-top: 10px;
  color: #777;
}

.card-footer a {
  text-decoration: none;
  color: #007bff;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.card-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
}
  </style>
  