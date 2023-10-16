<template>
    <div class="header-views">
      <div class="title-large text-semibold layout-title">{{ title }}</div>
      <div>
        <slot name="actions">
        </slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  
  @Component
  export default class HeaderViews extends Vue {
    @Prop() title!: string
  }
  </script>
  
  <style scoped>
  </style>
  