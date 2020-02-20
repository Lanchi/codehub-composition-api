import { computed, reactive, ref } from '@vue/composition-api';
import { sortBy } from 'lodash';

export default function useSorting({ input }) {
  const sortState = reactive({
    input,
  });

  const selectedSortingOption = ref('name');

  const sortingOutput = computed(
    () => sortBy(sortState.input, [selectedSortingOption.value]),
  );

  return { sortState, sortingOutput, selectedSortingOption };
}
