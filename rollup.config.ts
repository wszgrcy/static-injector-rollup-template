import { RollupOptions } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { createTransformer } from "static-injector/transform";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
const config: RollupOptions = {
  input: "src/index.ts",
  output: { file: "./dist/main.js", format: "iife" },
  plugins: [
    terser({ format: { comments: false } }),
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.build.json",
      transformers: { before: [{ type: "program", factory: (program) => createTransformer(program) }] },
    }),
  ],
};
export default config;
