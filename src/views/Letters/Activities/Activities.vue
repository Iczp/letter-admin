<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap';
import { Search } from '@/components/Search';
import { Dialog } from '@/components/Dialog';
import { useI18n } from '@/hooks/web/useI18n';
import { ElMessage, ElMessageBox, ElTag } from 'element-plus';
import { Table } from '@/components/Table';
import {
  getDepartmentApi,
  getDepartmentTableApi,
  saveDepartmentApi,
  deleteDepartmentApi
} from '@/api/department';
import type { DepartmentItem } from '@/api/department/types';
import { useTable } from '@/hooks/web/useTable';
import { ref, unref, reactive } from 'vue';
import Write from './components/Write.vue';
import Detail from './components/Detail.vue';
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas';
import { BaseButton } from '@/components/Button';
import {
  activitiesCreate,
  activitiesDeleteMany,
  activitiesGetList,
  activitiesUpdate,
  ActivityCreateInput,
  activityCustomerGetList,
  ActivityUpdateInput
} from '@/client';
import { formatToDate } from '@/utils/dateUtil';
import { IdDto } from '@/api/dtos/IdDto';

const ids = ref<string[]>([]);

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState;

    const res = await activitiesGetList({
      query: {
        // id: unref(currentNodeKey),
        skip: currentPage.value ? 0 : (currentPage.value - 1) * pageSize.value,
        pageSize: unref(pageSize),
        ...unref(searchParams)
      }
    });

    console.log('activitiesGetList', res);

    return {
      list: res.data?.items || [],
      total: res.data?.totalCount || 0
    };
  },
  fetchDelApi: async () => {
    const res = await deleteDepartmentApi(unref(ids));
    return !!res;
  }
});
const { loading, dataList, total, currentPage, pageSize } = tableState;
const { getList, getElTableExpose, delList } = tableMethods;

const searchParams = ref({});
const setSearchParams = (params: any) => {
  searchParams.value = params;
  getList();
};

const { t } = useI18n();

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
    label: t('tableDemo.index'),
    type: 'index',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    }
  },
  {
    field: 'keyword',
    label: '搜索关键字',
    form: {
      hidden: true,
      component: 'Input',
      componentProps: {
        nodeKey: 'keyword',
        props: {
          label: 'keyword'
        }
      }
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
    field: 'title',
    label: '活动标题',
    search: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return <>{data.row.title}</>;
        }
      }
    },
    form: {
      component: 'Input',
      componentProps: {
        nodeKey: 'title',
        props: {
          label: 'title'
        }
      },
      optionApi: async () => {
        const res = await getDepartmentApi();
        return res.data.list;
      }
    },
    detail: {
      slots: {
        default: (data: any) => {
          return <>{data.title}</>;
        }
      }
    }
  },
  {
    field: 'max_count',
    label: 'max_count',
    search: {
      hidden: true
    },
    form: {
      component: 'InputNumber',
      colProps: {
        span: 8
      }
    }
  },
  {
    field: 'address',
    label: 'address',
    search: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return <>{data.row.address}</>;
        }
      }
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      },
      componentProps: {
        nodeKey: 'address',
        props: {
          label: 'address'
        }
      }
    },
    detail: {
      slots: {
        default: (data: any) => {
          return <>{data.title}</>;
        }
      }
    }
  },
  {
    field: 'start_time',
    label: t('start_time'),
    table: {
      slots: {
        default: (data: any) => {
          return <>{formatToDate(data.row.start_time)}</>;
        }
      }
    },
    form: {
      component: 'DatePicker'
    },
    search: {
      hidden: true
    }
  },
  {
    field: 'end_time',
    label: t('end_time'),
    table: {
      slots: {
        default: (data: any) => {
          return <>{formatToDate(data.row.end_time)}</>;
        }
      }
    },
    form: {
      component: 'DatePicker'
    },
    search: {
      hidden: true
    }
  },

  {
    field: 'creation_time',
    label: t('tableDemo.displayTime'),
    search: {
      hidden: true
    },
    form: {
      hidden: true
    }
  },
  {
    field: 'description',
    label: t('userDemo.remark'),
    search: {
      hidden: true
    },
    form: {
      component: 'Input',
      componentProps: {
        type: 'textarea',
        rows: 5
      },
      colProps: {
        span: 24
      }
    },
    detail: {
      slots: {
        default: (data: any) => {
          return <>{data.description}</>;
        }
      }
    }
  },
  {
    field: 'is_enabled',
    label: t('userDemo.status'),
    search: {
      hidden: true
    },
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
      component: 'Select',
      componentProps: {
        options: [
          {
            value: false,
            label: t('userDemo.disable')
          },
          {
            value: true,
            label: t('userDemo.enable')
          }
        ]
      }
    },
    detail: {
      slots: {
        default: (data: any) => {
          return (
            <>
              <ElTag type={data.status === 0 ? 'danger' : 'success'}>
                {data.status === 1 ? t('userDemo.enable') : t('userDemo.disable')}
              </ElTag>
            </>
          );
        }
      }
    }
  },
  {
    field: 'action',
    width: '240px',
    label: t('tableDemo.action'),
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
      slots: {
        default: (data: any) => {
          return (
            <>
              <BaseButton type="primary" onClick={() => action(data.row, 'edit')}>
                {t('exampleDemo.edit')}
              </BaseButton>
              <BaseButton type="success" onClick={() => action(data.row, 'detail')}>
                {t('exampleDemo.detail')}
              </BaseButton>
              <BaseButton type="danger" onClick={() => delData(data.row)}>
                {t('exampleDemo.del')}
              </BaseButton>
            </>
          );
        }
      }
    }
  }
]);

// @ts-ignore
const { allSchemas } = useCrudSchemas(crudSchemas);

const dialogVisible = ref(false);
const dialogTitle = ref('');

const currentRow = ref<DepartmentItem | null>(null);
const actionType = ref('');

const AddAction = () => {
  dialogTitle.value = t('exampleDemo.add');
  currentRow.value = null;
  dialogVisible.value = true;
  actionType.value = '';
};

const delLoading = ref(false);

const delData = async (row: DepartmentItem | null) => {
  const elTableExpose = await getElTableExpose();
  ids.value = row ? [row.id] : elTableExpose?.getSelectionRows().map((v: IdDto) => v.id) || [];
  if (!ids.value.length) {
    return ElMessage({ message: '请选择要删除的记录', type: 'warning' });
  }

  ElMessageBox.confirm(`是否要删除选中记录(${ids.value.length})?`, '删除', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    delLoading.value = true;
    await activitiesDeleteMany({
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
};

const action = (row: DepartmentItem, type: string) => {
  dialogTitle.value = t(type === 'edit' ? 'exampleDemo.edit' : 'exampleDemo.detail');
  actionType.value = type;
  currentRow.value = row;
  dialogVisible.value = true;
};

const writeRef = ref<ComponentRef<typeof Write>>();

const saveLoading = ref(false);

const save = async () => {
  const write = unref(writeRef);
  const formData = await write?.submit();
  console.log('save formData', formData);

  if (formData) {
    const isEdit = formData.id !== undefined;
    saveLoading.value = true;
    let res: any = null;
    const body = {
      ...(formData as ActivityUpdateInput)
    };
    console.log('save formData', JSON.stringify(body, null, 2));
    if (isEdit) {
      delete body['id'];
      res = await activitiesUpdate({
        path: {
          id: formData.id
        },
        body
      });
    } else {
      res = await activitiesCreate({ body });
    }

    if (res) {
      dialogVisible.value = false;
      currentPage.value = 1;
      getList();
    }
    saveLoading.value = false;
  }
};
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" @reset="setSearchParams" />

    <div class="mb-10px">
      <BaseButton type="primary" @click="AddAction">{{ t('exampleDemo.add') }}</BaseButton>
      <BaseButton :loading="delLoading" type="danger" @click="delData(null)">
        {{ t('exampleDemo.del') }}
      </BaseButton>
    </div>

    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="allSchemas.tableColumns"
      :data="dataList"
      :loading="loading"
      :pagination="{
        total: total
      }"
      @register="tableRegister"
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
</template>
