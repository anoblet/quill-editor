import commonjs from 'rollup-plugin-commonjs';
import resolve from "rollup-plugin-node-resolve";
import svg from "rollup-plugin-svg";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/component.ts",
  output: {
    file: "dist/index.js",
    format: "esm"
  },
  plugins: [
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    commonjs(),
    typescript(),
    svg()
  ]
};
