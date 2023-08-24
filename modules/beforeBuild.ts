import { defineNuxtModule, addPrerenderRoutes } from 'nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    addPrerenderRoutes(['/prerendered'])
  },
})
