<template>
  <div class="glass-pane">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.glass-pane {
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: saturate(100%) blur(30px);
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
