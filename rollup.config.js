import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/linear-congruential-generator.js",
    output: [
      { file: pkg.browser, name: "lcg", format: "umd" }
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  },
  {
    input: "src/linear-congruential-generator.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
