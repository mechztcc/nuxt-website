<template>
  <div class="global-wrapper">
    <Navbar />
    <NuxtPage>
      <slot />
    </NuxtPage>
  </div>
  <TemplateFooter />
</template>

<style lang="scss">
.global-wrapper {
  position: relative;
  min-height: 100vh;
}
</style>
