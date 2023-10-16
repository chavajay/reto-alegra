<template>
  <v-app>
    <v-app-bar color="#26A69A" elevation = "2" app dark>
      <span class="app-title heading-5 text-regular">CARRERA DE IMAGENES!</span>
      <v-spacer></v-spacer>
      <v-btn text icon :to="{ name: 'homeView' }">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

