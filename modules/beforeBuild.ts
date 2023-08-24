import { defineNuxtModule, addPrerenderRoutes } from 'nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    console.log('building prerendered')

    addPrerenderRoutes(['/prerendered'])
  },
})
