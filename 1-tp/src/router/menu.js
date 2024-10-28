export const menu  = [
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('@/views/article/ShoppingView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/list',
    name: 'liste',
    component: () => import('@/views/article/ListItemsView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add',
    name: 'ajouter',
    component: () => import('@/views/article/AddView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/openfoodfact',
    name: 'openfoodfact',
    component: () => import('@/views/article/ListOpenFoodFactView.vue')
  }
]