<template>
  <div>
    <p class="text-bold text-lg bg-red-300">hello world</p>

    <ClientOnly>
      <ul class="flex gap-5 bg-yellow-100">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
    </ClientOnly>

    <NuxtLink to="/prerendered">Go to prerendered</NuxtLink>
  </div>
</template>
