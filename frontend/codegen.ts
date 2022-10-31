import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    documents: ['src/**/*.graphql'],
    generates: {
        './src/graphql/gen-types.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
        }
    }
}

export default config