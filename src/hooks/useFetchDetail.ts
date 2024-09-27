import { log } from 'console';
import { computed, Ref, ref, watch } from 'vue';

export const useFetchDetail = <T>({
  rowId,
  service,
  loaded
}: {
  rowId: string | undefined;

  service: (opt: any) => Promise<any>;
  loaded?: (item: T) => void;
}) => {
  const item = ref<T>();
  const isLoading = ref(false);
  const refresh = (id: string) => {
    isLoading.value = true;
    service({ path: { id } })
      .then(({ data }) => {
        item.value = data;
        if (loaded) {
          loaded(data);
        }
      })
      .finally(() => {
        isLoading.value = false;
      });
  };

  const isCreate = computed(() => !rowId);

  watch(
    () => rowId,
    (id) => {
      console.log('#watch rowId', id);
      if (id) {
        refresh(id);
      }
    },
    { immediate: true }
  );
  return { item, isLoading, refresh, isCreate };
};
