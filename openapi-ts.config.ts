import { defineConfig } from '@hey-api/openapi-ts';

const formatName = (str: string, isUpper: boolean = true) => {
  if (!str) return ''; // 如果字符串为空，则返回空字符串
  const firstLetter = str.charAt(0);
  return isUpper ? firstLetter.toUpperCase() : firstLetter.toLocaleLowerCase() + str.slice(1);
};

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'http://localhost:3000/swagger.json',
  output: {
    format: 'prettier',
    path: 'src/client',
    // lint: 'eslint'
    lint: false,
  },
  services: {
    asClass: false,
    // name: '{{name}}Service',
    methodNameBuilder(operation) {
      // console.log('operation', operation);
      const parts = operation.name.split('Controller');
      // return formatName(parts[1], false);
      return parts.join('');
    },
    // operationId: true
    // response: 'response'
  },
  types: {
    enums: 'typescript',
  },
  schemas: {
    type: 'form',
  },
});
