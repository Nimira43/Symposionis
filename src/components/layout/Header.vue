<template>
  <nav class="navbar navbar-expand-md mx-auto my-2 w-100 bg-grey-light-extra bg-opacity-10 text-grey-dark">
    <div class="container-fluid">
      <router-link 
        class="navbar-brand" 
        :to="{name: APP_ROUTE_NAMES.HOME}"
      >
        <img 
          src="@/assets/logo.png" 
          alt="Unicorn logo"
          width="30"
          height="30"
          class="d-inline-block align-text-top me-2"
        >        
      </router-link>
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler icon text-light"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
</script>