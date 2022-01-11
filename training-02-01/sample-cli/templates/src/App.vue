<template>
  <router-view
    :style="{ background: this.$store.state.ui.pageBackground }"
    style="height:100%;"
  />
</template>

<script>
export default {};
</script>
<style lang="sass">

@import '~vue-xpc/src/style/index.scss';
@import '../element-variables.scss';
</style>
