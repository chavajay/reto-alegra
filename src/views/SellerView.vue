<!-- eslint-disable vue/valid-v-slot -->
<template>
    <div class="conteiner-view">
      <div class="header-container">
        <header-views title="Vendedores"></header-views>
        <v-btn class="create-button" elevation="0" @click="newSellerModal = true">
          CREAR VENDEDOR
        </v-btn> 
      </div>
      <v-card class="table-conteiner" elevation="0">
        <v-card-title class="title-table">
          <v-text-field
            outlined
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            label="Buscar"
            hide-details
            dense
            placeholder="Buscar"
          ></v-text-field>
          <v-spacer></v-spacer>
        </v-card-title>
        <div class="data-table-permissions">
          <v-data-table
            class="table-permissions"
            dense
            :headers="headers"
            :search="search"
            :items-per-page="5"
            :footer-props="{
              'items-per-page-text': 'Filas por página',
              pageText: '{0}-{1} de {2}',
              itemsPerPageOptions: [5, 15, 25, 50, -1],
              itemsPerPageAllText: 'Todos'
            }"
          >
          </v-data-table>
        </div>
      </v-card>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue } from 'vue-property-decorator'
  
  export default class SellerView extends Vue {
    newSellerModal = false
    search = ''
    headers = [
      { text: 'Nombre', value: '' },
      { text: 'Indentifacion', value: '' },
      { text: 'Observacion', value: '' },
      { text: 'Status', value: '' },
      { text: '', value: 'actions', sortable: false, align: 'end' }
    ]
}
  </script>
  <style>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .conteiner-view{
    margin: 16px;
  }
  
  .create-button {
    background-color: #4DB6AC !important;
    color: white !important;
    font-weight: bold;
    border-radius: 4px;
  }
  
  .title-table {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .data-table-permissions {
    margin-top: 20px;
  }

  .table-conteiner{
    margin: 32px;
    border-radius: 4px;
    border: #EEE solid 3px !important;
  }
  </style>