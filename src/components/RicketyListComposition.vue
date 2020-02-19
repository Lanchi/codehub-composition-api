<template>
  <v-container>
    <v-row>
      <v-col cols="12"
             sm="3">
        <v-text-field outlined
                      label="Search"
                      v-model="searchState.query"
                      @input="runSearch" />
      </v-col>
      <v-col cols="12"
             sm="3">
        <v-select outlined
                  v-model="selectedSortingOption"
                  item-text="label"
                  item-value="value"
                  label="Sort by"
                  :items="sortingOptions" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             sm="6"
             v-for="item in sortingOutput"
             :key="item.id">
        <RicketyCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed } from '@vue/composition-api';
import { loadResource } from '@/api';
import RicketyCard from '@/components/RicketyCard';
import useSearch from '@/composables/useSearch';
import useSorting from '@/composables/useSorting';

export default {
  name: 'RicketyListComposition',
  components: {
    RicketyCard,
  },
  setup() {
    const { searchState, runSearch } = useSearch(loadResource);

    const sortingOptions = [
      { label: 'Id', value: 'id' },
      { label: 'Name', value: 'name' },
      { label: 'Origin', value: 'origin.name' },
    ];
    const { sortingOutput, selectedSortingOption } = useSorting({
      input: computed(() => searchState.items),
    });

    return {
      searchState,
      runSearch,
      sortingOptions,
      sortingOutput,
      selectedSortingOption,
    };
  },
};
</script>
