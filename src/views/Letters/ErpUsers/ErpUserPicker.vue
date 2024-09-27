<script lang="ts" setup>
import { ref } from 'vue';
import { Dialog } from '@/components/Dialog';
import { ElTable, ElTableColumn } from 'element-plus';
import { erpUsersFindAll } from '@/client';
type IdDto = { id: string };
type PickerInput = {
  title?: string;
  isMultiple?: boolean;
  minCount?: number;
  maxCount?: number;
  selectedItems?: Array<IdDto>;
  disabledItems?: Array<IdDto>;
};
const props = withDefaults(
  defineProps<{
    width?: string | number;
    height?: string | number;
  }>(),
  { width: 560, height: 320 }
);

const selectedItems = ref<Array<IdDto>>([]);
const disabledItems = ref<Array<IdDto>>([]);

const visible = ref(true);
const title = ref('请选择');
const set = (args: PickerInput) => {
  visible.value = true;
};
const onConfirm = () => {
  visible.value = false;
};
const onCancel = () => {
  visible.value = false;
};

const currentRow = ref();
const singleTableRef = ref<InstanceType<typeof ElTable>>();

const setCurrent = (row?: any) => {
  singleTableRef.value!.setCurrentRow(row);
};
const selectable = (row: any) => ![1, 2].includes(row.id);
const handleCurrentChange = (val: any | undefined) => {
  currentRow.value = val;
};

erpUsersFindAll({
  query: {}
}).then((res) => {
  tableData.value = res?.data?.items || [];
});
const tableData = ref<Array<ErpUsersDto>>([]);

defineExpose({ set });
</script>

<template>
  <Dialog v-model="visible" :width="width" :maxHeight="height" :title="title">
    <el-table
      height="250"
      ref="singleTableRef"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      @current-change="handleCurrentChange"
    >
      <el-table-column type="selection" :selectable="selectable" width="55" />
      <el-table-column type="index" width="50" />
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column property="address" label="Address" show-overflow-tooltip>
        <template #default="scope">{{ scope.row.name }}</template>
      </el-table-column>
    </el-table>
    <template #footer>
      <div class="flex flex-row justify-between items-center">
        <div>ddd</div>
        <div>
          <BaseButton type="primary" @click="onConfirm"> 确定 </BaseButton>
          <BaseButton @click="onCancel">取消</BaseButton>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style lang="scss" scoped></style>
