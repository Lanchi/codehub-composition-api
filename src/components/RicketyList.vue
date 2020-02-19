<template>
  <v-container>
    <v-row>
      <v-col cols="12"
             sm="3">
        <v-text-field outlined
                      label="Search"
                      v-model="search"
                      @input="loadItems" />
      </v-col>
      <v-col cols="12"
             sm="3">
        <v-select outlined
                  v-model="selectedSort"
                  item-text="label"
                  item-value="value"
                  label="Sort by"
                  :items="sortingOptions" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"
             sm="6"
             v-for="item in sortedResult"
             :key="item.id">
        <RicketyCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sortBy } from 'lodash';
import { loadResource } from '@/api';
import RicketyCard from '@/components/RicketyCard';

export default {
  name: 'RicketyList',
  components: {
    RicketyCard,
  },
  data() {
    return {
      items: [],
      selectedSort: 'name',
      search: null,
      sortingOptions: [
        { label: 'Id', value: 'id' },
        { label: 'Name', value: 'name' },
        { label: 'Origin', value: 'origin.name' },
      ],
    };
  },
  computed: {
    sortedResult() {
      return sortBy(this.items, [this.selectedSort]);
    },
  },
  methods: {
    loadItems() {
      loadResource(this.search).then((items) => {
        this.items = items;
      });
    },
  },
  mounted() {
    this.loadItems();
  },
};
</script>
