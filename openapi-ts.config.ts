import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'path/to/openapi.json',
  output: {
    format: 'prettier',
    path: 'src/client',

    lint: false
  },
  services: {
    asClass: false
  },
  types: {
    enums: 'typescript'
  },
  schemas: {
    type: 'json'
  }
});
