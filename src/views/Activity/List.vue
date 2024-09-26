<script lang="ts" setup>
import { ElTableColumn, ElTag, ElPopover, ElButton, ElTable } from 'element-plus';
import { Dialog } from '@/components/Dialog';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface User {
  date: string;
  name: string;
  address: string;
}

const { t } = useI18n();

const dialogVisible = ref(false);
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
  dialogVisible.value = true;
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
];
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <!-- <el-icon><timer /></el-icon> -->
          <span style="margin-left: 10px">{{ scope?.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope?.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope?.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope?.$index, scope?.row)"> Edit </el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope?.$index, scope?.row)">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <Dialog v-model="dialogVisible" :title="'dialogTitle'">
    5555
    <template #footer>
      <!-- <BaseButton
        v-if="actionType !== 'detail'"
        type="primary"
        :loading="saveLoading"
        @click="save"
      >
        {{ t('exampleDemo.save') }}
      </BaseButton> -->
      <BaseButton @click="dialogVisible = false">{{ t('dialogDemo.close') }}</BaseButton>
    </template>
  </Dialog>
</template>
