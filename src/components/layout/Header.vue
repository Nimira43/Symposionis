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
        class="navbar-toggler bg-light override bg-grey-medium-hover:hover"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-light"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
</script>