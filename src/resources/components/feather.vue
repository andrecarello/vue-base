<template>
  <i class="feather-icon" :class="'fe-' + icon" v-if="icon" />
</template>

<script>
export default {
  name: "Feather",
  props: ["icon"],
};
</script>

