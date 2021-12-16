import vue from "rollup-plugin-vue";
import scss from "rollup-plugin-scss";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "src/index.js",
    output: {
      format: "esm",
      file: "dist/library.esm.js",
    },
    plugins: [
      commonjs(),
      scss({ outputStyle: "compressed" }),
      vue({ needMap: false }),
    ],
  },
  {
    input: "src/wrapper.js",
    output: {
      format: "iife",
      file: "dist/library.browser.js",
    },
    plugins: [
      commonjs(),
      scss({ outputStyle: "compressed" }),
      vue({ needMap: false }),
    ],
  },
  {
    input: "src/index.js",
    output: {
      format: "cjs",
      file: "dist/library.common.js",
    },
    plugins: [
      commonjs(),
      scss({ outputStyle: "compressed" }),
      vue({ template: { optimizeSSR: true } }),
    ],
  },
];
