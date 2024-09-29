<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap';
import { useI18n } from '@/hooks/web/useI18n';
import { Table } from '@/components/Table';
import { ref, unref, nextTick, watch, reactive } from 'vue';
import { ElTree, ElInput, ElDivider } from 'element-plus';
import { getDepartmentApi, getUserByIdApi, saveUserApi, deleteUserByIdApi } from '@/api/department';
import type { DepartmentItem, DepartmentUserItem } from '@/api/department/types';
import { useTable } from '@/hooks/web/useTable';
import { Search } from '@/components/Search';
import Write from './widget/Write.vue';
import Detail from './widget/Detail.vue';
import { Dialog } from '@/components/Dialog';
import { getRoleListApi } from '@/api/role';
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas';
import { BaseButton } from '@/components/Button';
import { ActivityService } from '@/api/activities/ActivityService';
import { activitiesGetList, activityCustomerGetList, ActivityDto } from '@/client';

const { t } = useI18n();

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { pageSize, currentPage } = tableState;
    const res = await activityCustomerGetList({
      query: {
        id: unref(currentNodeKey),
        skip: currentPage.value ? 0 : (currentPage.value - 1) * pageSize.value,
        pageSize: unref(pageSize),
        ...unref(searchParams)
      }
    });

    console.log('activityCustomerGetList', res);

    return {
      list: res.data?.items || [],
      total: res.data?.totalCount || 0
    };
  },
  fetchDelApi: async () => {
    const res = await deleteUserByIdApi(unref(ids));
    return !!res;
  }
});
const { total, loading, dataList, pageSize, currentPage } = tableState;
const { getList, getElTableExpose, delList } = tableMethods;

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'selection',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      type: 'selection'
    }
  },
  {
    field: 'index',
    label: t('userDemo.index'),
    form: {
      hidden: true
    },
    search: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      type: 'index'
    }
  },
  {
    field: 'activity.title',
    label: '活动名称',
    form: {
      component: 'Select',
      value: [],
      componentProps: {
        multiple: false,
        collapseTags: true,
        maxCollapseTags: 1
      },
      optionApi: async () => {
        const res = await activitiesGetList();
        return res.data?.items?.map((x) => ({
          label: x.title,
          value: x.id
        }));
      }
    }
  },
  {
    field: 'activity.id',
    label: '活动名称',
    form: {
      component: 'Select',
      value: [],
      componentProps: {
        multiple: false,
        collapseTags: true,
        maxCollapseTags: 1
      },
      optionApi: async () => {
        const res = await activitiesGetList();
        return res.data?.items?.map((x) => ({
          label: x.title,
          value: x.id
        }));
      }
    }
  },
  {
    field: 'customer_name',
    label: '客户名称'
  },
  {
    field: 'customer_gender',
    label: '性别'
  },
  {
    field: 'customer_name',
    label: '活动名称1',
    detail: {
      hidden: false

      // slots: {
      //   default: (data: DepartmentUserItem) => {
      //     return <>{data.department.departmentName}</>
      //   }
      // }
    },
    search: {
      hidden: true
    },
    form: {
      component: 'TreeSelect',
      componentProps: {
        nodeKey: 'id',
        props: {
          label: 'departmentName'
        }
      },
      optionApi: async () => {
        const res = await getDepartmentApi();
        return res.data.list;
      }
    },
    table: {
      hidden: true
    }
  },
  {
    field: 'role',
    label: '电话',
    search: {
      hidden: true
    },
    form: {
      component: 'Select',
      value: [],
      componentProps: {
        multiple: true,
        collapseTags: true,
        maxCollapseTags: 1
      },
      optionApi: async () => {
        const res = await getRoleListApi();
        return res.data?.list?.map((v) => ({
          label: v.roleName,
          value: v.id
        }));
      }
    }
  },
  {
    field: 'inviterConfig_Name',
    label: '邀请人'
  },
  {
    field: 'remarks',
    label: '备注',
    form: {
      component: 'Input'
    },
    search: {
      hidden: true
    }
  },
  {
    field: 'creation_time',
    label: t('userDemo.createTime'),
    form: {
      component: 'Input'
    },
    search: {
      hidden: true
    }
  },
  {
    field: 'action',
    label: t('userDemo.action'),
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    search: {
      hidden: true
    },
    table: {
      width: 240,
      slots: {
        default: (data: any) => {
          const row = data.row as DepartmentUserItem;
          return (
            <>
              <BaseButton type="primary" onClick={() => action(row, 'edit')}>
                {t('exampleDemo.edit')}
              </BaseButton>
              <BaseButton type="success" onClick={() => action(row, 'detail')}>
                {t('exampleDemo.detail')}
              </BaseButton>
              <BaseButton type="danger" onClick={() => delData(row)}>
                {t('exampleDemo.del')}
              </BaseButton>
            </>
          );
        }
      }
    }
  }
]);

const { allSchemas } = useCrudSchemas(crudSchemas);

const searchParams = ref({});
const setSearchParams = (params: any) => {
  currentPage.value = 1;
  searchParams.value = params;
  getList();
};

const treeEl = ref<typeof ElTree>();

const currentNodeKey = ref('');
const departmentList = ref<DepartmentItem[]>([]);
const activitiyItems = ref<ActivityDto[]>([]);
const fetchDepartment = async () => {
  const ret = await ActivityService.getList({});

  console.log(ret, ActivityService.name);

  const activities = await activitiesGetList({
    query: {
      skip: 0,
      limit: 999
    }
  });
  activitiyItems.value = activities.data?.items || [];
  const res = await getDepartmentApi();
  departmentList.value = res.data.list;

  currentNodeKey.value =
    (res.data.list[0] && res.data.list[0]?.children && res.data.list[0].children[0].id) || '';
  await nextTick();
  unref(treeEl)?.setCurrentKey(currentNodeKey.value);
};
fetchDepartment();

const currentDepartment = ref('');
watch(
  () => currentDepartment.value,
  (val) => {
    unref(treeEl)!.filter(val);
  }
);
const activity = ref<ActivityDto>();
const currentChange = (item: ActivityDto) => {
  // if (data.children) return
  console.log('currentChange', item);
  currentNodeKey.value = item.id;
  currentPage.value = 1;
  activity.value = item;
  getList();
};

const filterNode = (value: string, data: DepartmentItem) => {
  if (!value) return true;
  return data.departmentName.includes(value);
};

const dialogVisible = ref(false);
const dialogTitle = ref('');

const currentRow = ref<DepartmentUserItem>();
const actionType = ref('');

const AddAction = () => {
  dialogTitle.value = t('exampleDemo.add');
  currentRow.value = undefined;
  dialogVisible.value = true;
  actionType.value = '';
};

const delLoading = ref(false);
const ids = ref<string[]>([]);

const delData = async (row?: DepartmentUserItem) => {
  const elTableExpose = await getElTableExpose();
  ids.value = row
    ? [row.id]
    : elTableExpose?.getSelectionRows().map((v: DepartmentUserItem) => v.id) || [];
  delLoading.value = true;

  await delList(unref(ids).length).finally(() => {
    delLoading.value = false;
  });
};

const action = (row: DepartmentUserItem, type: string) => {
  dialogTitle.value = t(type === 'edit' ? 'exampleDemo.edit' : 'exampleDemo.detail');
  actionType.value = type;
  currentRow.value = { ...row, department: unref(treeEl)?.getCurrentNode() || {} };
  dialogVisible.value = true;
};

const writeRef = ref<ComponentRef<typeof Write>>();

const saveLoading = ref(false);

const save = async () => {
  const write = unref(writeRef);
  const formData = await write?.submit();
  if (formData) {
    saveLoading.value = true;
    try {
      const res = await saveUserApi(formData);
      if (res) {
        currentPage.value = 1;
        getList();
      }
    } catch (error) {
      console.log(error);
    } finally {
      saveLoading.value = false;
      dialogVisible.value = false;
    }
  }
};

const excelExportVisible = ref(false);
const excelExportTitle = ref(t('excel.export'));
</script>

<template>
  <div class="flex w-100% h-100%">
    <ContentWrap class="w-250px">
      <div class="flex justify-center items-center">
        <div class="flex-1">{{ t('userDemo.departmentList') }}</div>
        <ElInput
          v-model="currentDepartment"
          class="flex-[2]"
          :placeholder="t('userDemo.searchDepartment')"
          clearable
        />
      </div>
      <ElDivider />
      <!-- <ul>
        <li v-for="(item, index) in activitiyItems" :key="item?.id">
          {{ index }} - {{ item.title }}
        </li>
      </ul> -->
      <ElTree
        ref="treeEl"
        :data="activitiyItems"
        default-expand-all
        :expand-on-click-node="false"
        node-key="id"
        :current-node-key="currentNodeKey"
        :props="{
          label: 'departmentName'
        }"
        :filter-node-method="filterNode"
        @current-change="currentChange"
      >
        <template #default="{ data }">
          <div :title="data.title" class="whitespace-nowrap overflow-ellipsis overflow-hidden">
            {{ data.title }}
          </div>
        </template>
      </ElTree>
    </ContentWrap>
    <ContentWrap class="flex-[3] ml-20px">
      <Search
        :schema="allSchemas.searchSchema"
        @reset="setSearchParams"
        @search="setSearchParams"
      />

      <div class="mb-10px">
        <BaseButton type="primary" @click="AddAction">{{ t('exampleDemo.add') }}</BaseButton>
        <BaseButton type="primary" @click="excelExportVisible = true">{{
          t('excel.export')
        }}</BaseButton>
        <BaseButton type="primary" @click="AddAction">{{ t('excel.import') }}</BaseButton>
        <BaseButton :loading="delLoading" type="danger" @click="delData()">
          {{ t('exampleDemo.del') }}
        </BaseButton>
      </div>
      <Table
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :columns="allSchemas.tableColumns"
        :data="dataList"
        :loading="loading"
        @register="tableRegister"
        :pagination="{
          total
        }"
      />
    </ContentWrap>

    <Dialog v-model="dialogVisible" :title="dialogTitle">
      <Write
        v-if="actionType !== 'detail'"
        ref="writeRef"
        :form-schema="allSchemas.formSchema"
        :current-row="currentRow"
      />

      <Detail
        v-if="actionType === 'detail'"
        :detail-schema="allSchemas.detailSchema"
        :current-row="currentRow"
      />

      <template #footer>
        <BaseButton
          v-if="actionType !== 'detail'"
          type="primary"
          :loading="saveLoading"
          @click="save"
        >
          {{ t('exampleDemo.save') }}
        </BaseButton>
        <BaseButton @click="dialogVisible = false">{{ t('dialogDemo.close') }}</BaseButton>
      </template>
    </Dialog>

    <Dialog v-model="excelExportVisible" :title="excelExportTitle">
      excel export

      <Detail
        v-if="actionType === 'detail'"
        :detail-schema="allSchemas.detailSchema"
        :current-row="currentRow"
      />

      <template #footer>
        <BaseButton type="primary" :loading="saveLoading" @click="excelExportVisible = false">
          {{ t('excel.export') }}
        </BaseButton>
        <BaseButton @click="excelExportVisible = false">{{ t('dialogDemo.close') }}</BaseButton>
      </template>
    </Dialog>
  </div>
</template>
