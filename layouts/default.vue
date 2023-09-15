<template>
  <div class="global-wrapper">
    <Navbar />
    <NuxtPage>
      <slot />
    </NuxtPage>
    <TemplateFooter />
  </div>
</template>

<style lang="scss">
.global-wrapper {
  position: relative;
  min-height: 100vh;
}
</style>
