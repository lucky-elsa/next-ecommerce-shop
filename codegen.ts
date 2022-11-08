
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-eu-west-2.hygraph.com/v2/cla4ant1k3ggm01ui9s8ge08e/master",
  documents: "services/graphql/queries/*.graphql",
  generates: {
    "generated/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
