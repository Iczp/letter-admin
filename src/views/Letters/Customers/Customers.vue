<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap';
import { useI18n } from '@/hooks/web/useI18n';
import { Table } from '@/components/Table';
import { ref, unref, nextTick, watch, reactive } from 'vue';
import { ElTree, ElInput, ElDivider, ElTag, ElMessageBox, ElMessage } from 'element-plus';
import { saveUserApi, deleteUserByIdApi } from '@/api/department';
import { useTable } from '@/hooks/web/useTable';
import { Search } from '@/components/Search';
import Write from './components/Write.vue';
import Detail from './components/Detail.vue';
import { Dialog } from '@/components/Dialog';
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas';
import { BaseButton } from '@/components/Button';
import {
  activitiesGetList,
  activityCustomerGetList,
  ActivityDto,
  activityCustomerDeleteMany,
  InviterConfigDto,
  customer_gender
} from '@/client';
import Form from './components/Form.vue';

const { t } = useI18n();

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { pageSize, currentPage } = tableState;
    const res = await activityCustomerGetList({
      query: {
        activity_id: unref(currentNodeKey),
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
    field: 'keyword',
    label: '搜索关键字',
    form: {
      hidden: true
    },
    search: {
      hidden: false
    },
    detail: {
      hidden: true
    },
    table: {
      hidden: true
    }
  },
  {
    field: 'customer_name',
    label: '客户名称',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    }
  },
  {
    field: 'customer_gender',
    label: '性别',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          const genderEnums = {
            Unknown: '未知',
            Male: '男',
            Female: '女'
          };
          const gender = data.row.customer_gender ?? '55';
          return (
            <>
              <ElTag type={gender == customer_gender.MALE ? 'success' : 'danger'}>
                {genderEnums[gender]}
              </ElTag>
            </>
          );
        }
      }
    }
  },
  {
    field: 'customer_phone',
    label: '电话',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    }
  },
  {
    field: 'inviterConfig_Name',
    label: '邀请人',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    }
  },

  {
    field: 'activity_title',
    label: '活动名称',
    search: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return <>{data.row.activity_title}</>;
        }
      }
    },
    form: {
      component: 'Select',
      value: [],
      componentProps: {
        disabled: false,
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
    },
    detail: {
      slots: {
        default: (data: any) => {
          return <>{data.activity?.title}</>;
        }
      }
    }
  },
  {
    field: 'is_invited',
    label: '是否邀请',
    table: {
      slots: {
        default: (data: any) => {
          const is_invited = data.row.is_invited;
          return (
            <>
              <ElTag type={is_invited ? 'success' : 'danger'}>
                {is_invited ? '已邀请' : '未邀请'}
              </ElTag>
            </>
          );
        }
      }
    },
    form: {
      component: 'Input'
    },
    search: {
      hidden: true
    }
  },
  {
    field: 'is_signed',
    label: '是否签到',
    table: {
      slots: {
        default: (data: any) => {
          const is_signed = data.row.is_signed;
          return (
            <>
              <ElTag type={is_signed ? 'success' : 'danger'}>
                {is_signed ? '已签到' : '未签到'}
              </ElTag>
            </>
          );
        }
      }
    },
    form: {
      component: 'Input'
    },
    search: {
      hidden: true
    }
  },
  {
    field: 'is_gifted',
    label: '发放礼品',
    table: {
      slots: {
        default: (data: any) => {
          const is_gifted = data.row.is_gifted;
          return (
            <>
              <ElTag type={is_gifted ? 'success' : 'danger'}>
                {is_gifted ? '已发放' : '未发放'}
              </ElTag>
            </>
          );
        }
      }
    },
    form: {
      component: 'Input'
    },
    search: {
      hidden: true
    }
  },
  {
    field: 'is_enabled',
    label: '是否启用',
    table: {
      slots: {
        default: (data: any) => {
          const is_enabled = data.row.is_enabled;
          return (
            <>
              <ElTag type={is_enabled ? 'success' : 'danger'}>
                {is_enabled ? t('userDemo.enable') : t('userDemo.disable')}
              </ElTag>
            </>
          );
        }
      }
    },
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
      width: 160,
      slots: {
        default: (data: any) => {
          const row = data.row as InviterConfigDto;
          return (
            <>
              <BaseButton type="primary" onClick={() => action(row, 'edit')}>
                {t('exampleDemo.edit')}
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
const activitiesList = ref<ActivityDto[]>([]);
const fetchDepartment = async () => {
  const res = await activitiesGetList();
  activitiesList.value = res.data?.items || [];
  currentNodeKey.value = res.data?.items[0].id || '';
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
  currentNodeKey.value = item.id;
  currentPage.value = 1;
  activity.value = item;
  getList();
};

const filterNode = (value: string, data: ActivityDto) => {
  if (!value) return true;
  return data.title.includes(value);
};

const dialogVisible = ref(false);
const dialogTitle = ref('');

const currentRow = ref<InviterConfigDto>();
const actionType = ref('');

const AddAction = () => {
  dialogTitle.value = t('exampleDemo.add');
  currentRow.value = undefined;
  dialogVisible.value = true;
  actionType.value = '';
};

const delLoading = ref(false);
const ids = ref<string[]>([]);

const delData = async (row?: InviterConfigDto) => {
  const elTableExpose = await getElTableExpose();
  ids.value = row
    ? [row.id]
    : elTableExpose?.getSelectionRows().map((v: InviterConfigDto) => v.id) || [];
  if (!ids.value.length) {
    return ElMessage({ message: '请选择要删除的记录', type: 'warning' });
  }

  ElMessageBox.confirm(`是否要删除选中记录(${ids.value.length})?`, '删除', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    delLoading.value = true;
    await activityCustomerDeleteMany({
      query: {
        id: unref(ids)
      }
    })
      .then((res) => {
        console.log(res);
        getList();
        ElMessage({
          type: 'success',
          message: '删除成功'
        });
      })
      .finally(() => {
        delLoading.value = false;
      });
  });
  // .catch(() => {
  //   ElMessage({
  //     type: 'info',
  //     message: 'Delete canceled'
  //   });
  // });
};

const action = (row: InviterConfigDto, type: string) => {
  rowId.value = row.id;
  rowItem.value = row;
  formDialog.visible = true;
  return;

  console.log('rowId.value', rowId.value);
  dialogTitle.value = t(type === 'edit' ? 'exampleDemo.edit' : 'exampleDemo.detail');
  actionType.value = type;
  currentRow.value = {
    ...row
    // department: unref(treeEl)?.getCurrentNode() || {}
  };
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

const formDialog = reactive({
  visible: false,
  title: '表单'
});
const rowId = ref<string>();
const rowItem = ref<InviterConfigDto>();
const formRef = ref<InstanceType<typeof Form> | null>();

const addAction = () => {
  if (!activity.value) {
    activity.value = activitiesList.value[0];
  }

  formDialog.visible = true;
  rowId.value = '';
  rowItem.value = undefined;
};

const onSave = () => {
  formRef.value!.submit().then(() => {
    formDialog.visible = false;
    getList();
  });
};
</script>

<template>
  <div class="flex w-100% h-100%">
    <ContentWrap class="w-250px">
      <div class="flex justify-center items-center">
        <div class="flex-1">活动列表</div>
        <ElInput v-model="currentDepartment" class="flex-[2]" :placeholder="'搜索活动'" clearable />
      </div>
      <ElDivider />
      <ElTree
        ref="treeEl"
        :data="activitiesList"
        default-expand-all
        :expand-on-click-node="false"
        node-key="id"
        :current-node-key="currentNodeKey"
        :props="{
          label: 'activityTitle'
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
        <BaseButton type="primary" @click="addAction">{{ t('exampleDemo.add') }}</BaseButton>
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

    <Dialog v-model="formDialog.visible" :title="formDialog.title">
      <Form ref="formRef" :row-id="rowId" :row="rowItem" :activity="activity" />
      <template #footer>
        <BaseButton type="primary" @click="onSave">
          {{ t('exampleDemo.save') }}
        </BaseButton>
        <BaseButton @click="formDialog.visible = false">{{ t('dialogDemo.close') }}</BaseButton>
      </template>
    </Dialog>

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
  </div>
</template>
