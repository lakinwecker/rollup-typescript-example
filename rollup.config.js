// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',

  plugins: [
    typescript(/*{ plugin options }*/)
  ]
}
