import { ElMessage } from 'element-plus';

export const If = (condition: boolean, message: string | (() => string)) => {
  if (!condition) {
    return;
  }
  if (typeof message === 'function') {
    message = message();
  }

  ElMessage.error(message);
  throw new Error(message);
};
