<template>
  <div class="contein-search">
    <v-text-field
      v-model="search"
      label="Buscar imágenes"
      outlined
      dense
      class="search-input"
    ></v-text-field>

    <v-row class="image-grid">
      <v-col
        v-for="image in filteredImages"
        :key="image.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="image-card" @click="toggleLike(image)">
          <v-img
            :src="image.url"
            aspect-ratio="1"
            contain
            class="image"
          ></v-img>
          <v-card-title class="image-title">
            <span>{{ image.title }}</span>
            <v-btn icon @click.stop="toggleLike(image)" class="like-button">
              <v-icon
                :color="image.liked ? 'red' : 'grey'"
              >
                {{ image.liked ? 'mdi-heart' : 'mdi-heart-outline' }}
              </v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      images: [
        {
          id: 1,
          title: 'Imagen 1',
          url: 'https://via.placeholder.com/150',
          liked: false,
        },
        {
          id: 2,
          title: 'Imagen 2',
          url: 'https://via.placeholder.com/150',
          liked: false,
        },
        {
          id: 2,
          title: 'Imagen 2',
          url: 'https://via.placeholder.com/150',
          liked: false,
        },
        {
          id: 2,
          title: 'Imagen 2',
          url: 'https://via.placeholder.com/150',
          liked: false,
        },
      ],
    };
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) =>
        image.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    toggleLike(image) {
      image.liked = !image.liked;
    },
  },
};
</script>

<style>
.search-input {
  padding: 32px;
  margin: 32px;
  width: 500px;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
}

.image-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  margin: 10px;
}

.image-card:hover {
  transform: scale(1.05);
}

.image {
  border-radius: 8px;
}

.image-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-button {
  padding: 0;
}

.contein-search{
  margin: 32px !important;
}
</style>
