<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import {
  ElForm,
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
  ElAutocomplete
} from 'element-plus';

import type { ComponentSize, FormInstance, FormRules } from 'element-plus';

import { InviterConfigDetailDto, InviterConfigDto, inviterConfigGetItem } from '@/client';
import { useFetchDetail } from '@/hooks/useFetchDetail';

import ErpUserPicker from '@/views/Letters/ErpUsers/ErpUserPicker.vue';
import { set } from 'nprogress';

interface RuleForm {
  name: string;
  region: string;
  count: string;
  date1: string;
  date2: string;
  delivery: boolean;
  location: string;
  type: string[];
  resource: string;
  desc: string;
  maxCount: number;
  inviterId: string;
  activityId: string;
}

const props = defineProps<{
  rowId?: string | undefined;
  // item: InviterConfigDetailDto | undefined;
}>();

const erpUserPicker = ref<InstanceType<typeof ErpUserPicker>>();
const ruleForm = reactive({
  name: 'Hello',

  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: '',
  maxCount: 0,
  inviterId: '',
  activityId: ''
});
const { item, isLoading, refresh } = useFetchDetail<InviterConfigDetailDto>({
  rowId: props.rowId,
  service: inviterConfigGetItem,
  loaded: (item) => {
    console.log('loaded', item);
    Object.keys(ruleForm).forEach((key) => {
      if (item[key as keyof InviterConfigDetailDto]) {
        ruleForm[key] = item[key];
      }
    });
  }
});

const formSize = ref<ComponentSize>('default');
const ruleFormRef = ref<FormInstance>();

console.log('ruleForm', Object.keys(ruleForm));

const locationOptions = ['Home', 'Company', 'School'];

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change'
    }
  ],
  desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}));
const submit = () => {};

const maxCountChange = (val: number) => {
  // ruleForm.maxCount = val;
};
defineExpose({ submit });

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
    { value: 'babel', link: 'https://github.com/babel/babel' }
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

const showErpUserPicker = () => {
  erpUserPicker.value?.set({});
};
</script>

<template>
  <div>
    <ErpUserPicker ref="erpUserPicker" />
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      :disabled="isLoading"
      status-icon
    >
      <el-form-item label="活动名称" prop="region">
        <el-select v-model="ruleForm.activityId" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="邀请人" required>
        <el-col :span="16"> <el-input v-model="ruleForm.name" /></el-col>
        <el-col :span="4" style="text-align: center">
          <el-button @click="showErpUserPicker"> 选择 </el-button>
        </el-col>
      </el-form-item>

      <el-form-item label="Activity count" prop="count">
        <el-input-number v-model="ruleForm.maxCount" :min="1" :max="10" @change="maxCountChange" />
      </el-form-item>

      <!-- <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"> Create </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item> -->
    </el-form>
  </div>
</template>
