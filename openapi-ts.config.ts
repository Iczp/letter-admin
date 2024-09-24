import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'http://localhost:3005/swagger.json',
  output: {
    format: 'prettier',
    path: 'src/client',
    lint: 'eslint'
  },
  services: {
    asClass: false
  },
  types: {
    enums: 'typescript'
  },
  schemas: {
    type: 'form'
  }
});
