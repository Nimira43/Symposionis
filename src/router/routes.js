import NoAccess from '@/views/auth/NoAccess.vue'
import NotFound from '@/views/auth/NotFound.vue'
import SignIn from '@/views/auth/SignIn.vue'
import SignUp from '@/views/auth/SignUp.vue'
import ShoppingCart from '@/views/cart/ShoppingCart.vue'
import Home from '@/views/home/Home.vue'
import MenuItemList from '@/views/menu-item/MenuItemList.vue'
import MenuItemUpsert from '@/views/menu-item/MenuItemList.vue'
import OrderConfirmation from '@/views/order/OrderConfirmation.vue'
import OrderHistoryList from '@/views/order/OrderHistoryList.vue'
import OrderManagement from '@/views/order/OrderManagement.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
