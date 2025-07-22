<template>
  <div class="d-flex flex-column py-2 min-vh-100 container-md">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>


<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

