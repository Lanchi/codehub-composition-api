<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png"
         ref="logo">
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api';

export default {
  name: 'Home',
  setup() {
    const logo = ref(null);

    onMounted(() => {
      console.log(logo.value);
    });

    return { logo };
  },
};
</script>
