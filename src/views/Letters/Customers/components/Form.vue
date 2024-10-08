<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import {
  ElForm,
  ElInput,
  ElTag,
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
  ElMessage,
} from 'element-plus';

import type { ComponentSize, FormInstance, FormRules } from 'element-plus';

import {
  ActivityDto,
  activityCustomerCreate,
  InviterConfigDetailDto,
  InviterConfigDto,
  activityCustomerGetItem,
  activityCustomerUpdate,
  UserDto,
  usersGetList,
} from '@/client';
import { useFetchDetail } from '@/hooks/useFetchDetail';

import UsersPicker from '@/views/Letters/Users/UsersPicker.vue';

interface IForm {
  maxCount: number;
  inviterId: string;
  activityId: string;
  isEnabled: boolean;
}

const props = defineProps<{
  rowId?: string | undefined;
  activity?: ActivityDto;
  row?: InviterConfigDetailDto | undefined;
}>();

const inviter = ref<UserDto>();
const erpUserPicker = ref<InstanceType<typeof UsersPicker>>();
const form = reactive({
  maxCount: 0,
  inviterId: '',
  activityId: '',
  isEnabled: true,
});

const item = ref<InviterConfigDetailDto>();
const { isLoading, refresh } = useFetchDetail<InviterConfigDetailDto>({
  rowId: props.rowId,
  service: activityCustomerGetItem,
  loaded: (item) => {
    console.log('loaded', item);
    // form.inviterId = item.inviter.id;
    form.activityId = item.activity.id;
    form.maxCount = item.max_count || 0;
    form.isEnabled = item.is_enabled || false;
    inviter.value = item.inviter;

    // Object.keys(form).forEach((key) => {
    //   if (item[key as keyof InviterConfigDetailDto]) {
    //     form[key] = item[key];
    //   }
    // });
  },
});

watch(
  () => props.activity,
  (v) => {
    if (v) {
      form.activityId = v.id;
    }
  },
  {
    immediate: true,
  },
);

watch(
  () => props.row,
  (v) => {
    console.log('#watch[props.row]', v);
    if (v) {
      item.value = v;
      form.maxCount = v.max_count || 0;
      // form.inviterId = v.activity.id;
      // form.activityId = v.inviter.id;
      form.isEnabled = v.is_enabled || false;
      // inviter.value = v.inviter;
    }
  },
  {
    immediate: true,
  },
);

const formSize = ref<ComponentSize>('default');
const formRef = ref<FormInstance>();

console.log('form', Object.keys(form));

const locationOptions = ['Home', 'Company', 'School'];

const rules = reactive<FormRules<IForm>>({
  inviterId: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  activityId: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
  maxCount: [{ required: true, message: 'Please select maxCount', trigger: 'change' }],
});

const submit = async () => {
  if (!formRef.value) return;
  await formRef.value.validate(async (valid, fields) => {
    if (valid) {
      console.log('submit! props.rowId', props.rowId);

      const res = props.rowId
        ? await activityCustomerUpdate({
            path: {
              id: props.rowId,
            },
            body: {
              max_count: form.maxCount,
              is_enabled: form.isEnabled,
            },
          })
        : await activityCustomerCreate({
            body: {
              max_count: form.maxCount,
              activity_id: form.activityId,
              inviter_user_id: form.inviterId,
            },
          });

      console.log(res);
    } else {
      console.log('error submit!', fields);
    }
  });
};

const reset = () => {
  if (!formRef.value) return;
  formRef.value!.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));

const maxCountChange = (val: number) => {
  // form.maxCount = val;
};

const state = ref('');

interface LinkItem {
  value: string;
  link: string;
}

const links = ref<LinkItem[]>([]);

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ];
};

let timeout: ReturnType<typeof setTimeout>;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};

const handleSelect = (item: Record<string, any>) => {
  console.log(item);
};

onMounted(() => {
  links.value = loadAll();
});
const inviterName = ref('Inviter');

const subDialogVisible = ref(true);

const onPick = ({ items }) => {
  if (items.length == 0) {
    ElMessage({
      message: '请选择邀请人',
      type: 'warning',
    });
    return;
  }
  const user = items[0] as UserDto;
  form.inviterId = user.id;
  inviter.value = user;
};
const showUsersPicker = () => {
  erpUserPicker.value?.set({});
};

defineExpose({
  submit,
  reset,
});
</script>

<template>
  <div>
    <UsersPicker ref="erpUserPicker" @pick="onPick" height="360" />
    <el-form
      ref="formRef"
      style="max-width: 600px"
      :model="form"
      :rules="rules"
      label-width="auto"
      class="demo-form"
      :size="formSize"
      :disabled="isLoading"
      status-icon
    >
      <el-form-item label="活动名称" prop="activityId">
        <!-- {{ form.activityId }}
        {{ activity }} -->
        <el-select
          v-model="form.activityId"
          :placeholder="activity?.title ?? '活动名称'"
          :disabled="!!form.activityId"
        >
          <el-option :label="activity?.title!" :checked="true" :value="activity?.id!" />
        </el-select>
      </el-form-item>

      <el-form-item label="邀请人" required>
        <el-col :span="24">
          <!-- <el-input v-model="form.name" :readonly="true" /> -->

          <div class="flex gap-2">
            <el-tag type="primary" size="large" @click="showUsersPicker" class="cursor-pointer">
              {{ inviter?.name }}
            </el-tag>
            <el-tag size="large" type="primary" @click="showUsersPicker">
              <Icon
                :size="18"
                @click="showUsersPicker"
                icon="vi-mdi:account-plus-outline"
                class="cursor-pointer"
              />
            </el-tag>
          </div>
        </el-col>
      </el-form-item>

      <el-form-item label="最大邀请人数" prop="maxCount">
        <el-input-number v-model="form.maxCount" :min="1" :max="1000" @change="maxCountChange" />
      </el-form-item>

      <el-form-item label="是否启用" prop="isEnabled">
        <el-switch v-model="form.isEnabled" />
      </el-form-item>

      <!-- <el-form-item>
      <el-button type="primary" @click="submit()"> Create </el-button>
      <el-button @click="reset(formRef)">Reset</el-button>
    </el-form-item> -->
    </el-form>
  </div>
</template>
