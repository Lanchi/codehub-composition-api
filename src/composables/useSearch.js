import { onMounted, reactive } from '@vue/composition-api';

export default function useSearch(getItems) {
  const searchState = reactive({
    query: null,
    items: [],
  });

  const runSearch = () => {
    getItems(searchState.query).then((result) => {
      searchState.items = result;
    });
  };

  onMounted(() => {
    runSearch();
  });

  return { searchState, runSearch };
}
