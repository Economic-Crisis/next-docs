import { defineConfig } from 'tsup'
import tsconfig from './tsconfig.json'

export default defineConfig({
  entry: ['./index.ts'],
  format: 'cjs',
  target: tsconfig.compilerOptions.target as 'es2016'
})
