<template>
  <v-app>
    <v-app-bar app
               color="primary"
               dark>
    </v-app-bar>

    <v-content>
      <!-- <RicketyList /> -->
      <RicketyListComposition />
    </v-content>
  </v-app>
</template>

<script>
import RicketyList from '@/components/RicketyList';
import RicketyListComposition from '@/components/RicketyListComposition';

export default {
  name: 'App',

  components: {
    RicketyList,
    RicketyListComposition,
  },

  data: () => ({
    //
  }),
};
</script>
