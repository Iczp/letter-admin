<script lang="ts" setup>
import { reactive, ref, unref } from 'vue';
import { Dialog } from '@/components/Dialog';
// import { Calendar, Search, Select } from '@element-plus/icons-vue';
import {
  ComponentSize,
  ElTable,
  ElTableColumn,
  TableInstance,
  ElPagination,
  ElForm,
  ElIcon,
  ElInput,
  ElSelect,
  ElButton,
  ElFormItem,
  ElOption,
  ElSelectV2,
  ElInputNumber,
  ElCheckbox,
  ElDatePicker,
  ElTimePicker,
  ElCheckboxGroup,
  ElRadioGroup,
  ElRadio,
  ElCol,
  ElSegmented,
  ElAffix,
  ElSwitch,
  ElTimeSelect,
  ElAutocomplete,
  FormInstance,
  ElDivider,
  ElMessage,
} from 'element-plus';
import { UserDto, usersGetList } from '@/client';

type IdDto = { id: string };
type PickerInput = {
  title?: string;
  isMultiple?: boolean;
  minCount?: number;
  maxCount?: number;
  selectedItems?: Array<IdDto>;
  disabledItems?: Array<IdDto>;
};
const emits = defineEmits(['pick']);
const props = withDefaults(
  defineProps<{
    width?: string | number;
    height?: string | number;
  }>(),
  { width: 640, height: 360 },
);

const tableRef = ref<TableInstance>();
const selectedItems = ref<Array<IdDto>>([]);
const disabledItems = ref<Array<IdDto>>([]);

const visible = ref(false);
const title = ref('请选择');

const pickerArgs = ref<PickerInput>({
  title: '请选择',
  isMultiple: true,
  minCount: 1,
  maxCount: 2,
  selectedItems: [],
  disabledItems: [],
});
const set = (args: PickerInput) => {
  pickerArgs.value = args;
  visible.value = true;
};
const onConfirm = () => {
  const items = tableRef.value!.getSelectionRows();
  console.log(items);

  if (items.length == 0) {
    ElMessage({
      message: '请选择至少一项',
      type: 'warning',
    });
    return;
  }
  emits('pick', { items });
  visible.value = false;
};
const onCancel = () => {
  visible.value = false;
};
const selectionItems = ref<Array<IdDto>>([]);

const currentRow = ref();
const singleTableRef = ref<InstanceType<typeof ElTable>>();

const setCurrent = (row?: UserDto) => {
  singleTableRef.value!.setCurrentRow(row);
};
const selectable = (row: UserDto) => !['1', '2'].includes(row.id!);
const handleCurrentChange = (row: UserDto | undefined) => {
  currentRow.value = row;
  tableRef.value!.clearSelection();

  tableRef.value!.toggleRowSelection(row, true);

  console.log('handleCurrentChange', row);
};
const selectionChange = (row: Array<UserDto>) => {
  console.log('selectionChange', row);
  selectionItems.value = row as Array<IdDto>;
  // tableRef.value!.toggleRowSelection(row, true);
};
usersGetList({
  query: {},
}).then((res) => {
  tableData.value = res?.data?.items || [];
});
const tableData = ref<Array<UserDto>>([]);

const currentPage2 = ref(5);

const pageSize2 = ref(10);

const size = ref<ComponentSize>('default');
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange1 = (val: number) => {
  console.log(`current page: ${val}`);
};

const onSelect = (selection: any[], row: any) => {
  const isSelected = selection.includes(row);
  console.log(`onSelect`, selection, row);
  if (!pickerArgs.value.isMultiple) {
    tableRef.value!.clearSelection();
    tableRef.value!.toggleRowSelection(row, isSelected);
  }
};

const searchForm = reactive({
  user: '',
  region: '',
  date: '',
});

const onSubmit = () => {
  console.log('submit!');
};
const searchFormRef = ref<FormInstance>();
const resetSearchForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

defineExpose({ set });
</script>

<template>
  <Dialog v-model="visible" :width="width" :maxHeight="height" :title="title">
    <el-form ref="searchFormRef" :inline="true" :model="searchForm" class="demo-form-inline">
      <el-form-item label="名字">
        <el-input v-model="searchForm.user" placeholder="名字" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetSearchForm(searchFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
    <ElDivider class="!m-0" />
    <el-table
      height="260"
      ref="tableRef"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      @select="onSelect"
      @current-change="handleCurrentChange"
      @selection-change="selectionChange"
    >
      <el-table-column type="selection" :selectable="selectable" width="55" />
      <el-table-column type="index" width="50" />
      <el-table-column property="name" label="Name" width="120">
        <template #default="scope">{{ scope.row.name }}({{ scope.row.positionName }})</template>
      </el-table-column>
      <el-table-column property="account" label="account" show-overflow-tooltip>
        <template #default="scope">{{ scope.row.account }}</template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="currentPage2"
      v-model:page-size="pageSize2"
      :page-sizes="[10, 20, 50, 100]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="sizes, prev, pager, next"
      :total="8400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange1"
      class="py-3"
    />
    <template #footer>
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row items-center gap-2">
          <div>已选择 {{ selectionItems.length }} 项 </div>
          <div v-if="selectionItems.length != 0">
            <a @click="tableRef?.clearSelection()" class="cursor-pointer text-sky">清空</a>
          </div>
        </div>
        <div>
          <BaseButton type="primary" @click="onConfirm"> 确定 </BaseButton>
          <BaseButton @click="onCancel">取消</BaseButton>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style lang="scss" scoped></style>
