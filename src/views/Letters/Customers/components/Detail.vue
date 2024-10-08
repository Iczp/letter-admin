<script setup lang="ts">
import { PropType } from 'vue';
import { Descriptions, DescriptionsSchema } from '@/components/Descriptions';
import { InviterConfigDto } from '@/client';
defineProps({
  currentRow: {
    type: Object as PropType<InviterConfigDto>,
    default: () => undefined,
  },
  detailSchema: {
    type: Array as PropType<DescriptionsSchema[]>,
    default: () => [],
  },
});
</script>

<template>
  <Descriptions :schema="detailSchema" :data="currentRow || {}" />
</template>
