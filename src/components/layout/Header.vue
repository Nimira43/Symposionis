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
            <router-link 
              :to="{name: APP_ROUTE_NAMES.HOME}" 
              class="nav-link text-uppercase active" 
              aria-current="page"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              :to="{name: APP_ROUTE_NAMES.ORDER_LIST}" 
              class="nav-link text-uppercase" 
              aria-current="page"
            >
              Orders
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a 
              href="#"
              class="nav-link text-uppercase dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-laptop"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link 
                  :to="{name: APP_ROUTE_NAMES.MENU_ITEM_LIST}" 
                  class="dropdown-item text-uppercase" 
                  aria-current="page"
                >
                  Menu Items
                </router-link>
              </li>
              <li>
                <router-link 
                  :to="{name: APP_ROUTE_NAMES.MANAGE_ORDER_ADMIN}" 
                  class="dropdown-item text-uppercase" 
                  aria-current="page"
                >
                  Order Management
                </router-link>
              </li>
            </ul>  
          </li>
        </ul>
        <ul class="navbar-nav ms-auto align-items-center small">
          <li class="nav-item px-2">
            <router-link 
              :to="{name: APP_ROUTE_NAMES.CART}" 
              class="nav-link px-2 position-relative text-uppercase" 
              aria-current="page"
            >
              <i class="bi bi-cart2"></i>
              <span class="position-absolute start-100 translate-middle badge rounded-pill bg-support">1</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              :to="{name: APP_ROUTE_NAMES.SIGN_IN}" 
              class="nav-link text-uppercase" 
              aria-current="page"
            >
              Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              :to="{name: APP_ROUTE_NAMES.SIGN_UP}" 
              class="nav-link text-uppercase" 
              aria-current="page"
            >
              Register
            </router-link>
          </li>
          <li class="nav-item">
            <button 
              class="nav-link px-2 text-uppercase" 
              aria-current="page"
            >
              Logout
            </button>
          </li>

          <li class="nav-item dropdown">
            <a 
              href="#"
              class="nav-link text-uppercase dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link 
                  :to="{name: APP_ROUTE_NAMES.MENU_ITEM_LIST}" 
                  class="dropdown-item text-uppercase" 
                  aria-current="page"
                >
                  Menu Items
                </router-link>
              </li>
              <li>
                <router-link 
                  :to="{name: APP_ROUTE_NAMES.MANAGE_ORDER_ADMIN}" 
                  class="dropdown-item text-uppercase" 
                  aria-current="page"
                >
                  Order Management
                </router-link>
              </li>
            </ul>  
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
</script>