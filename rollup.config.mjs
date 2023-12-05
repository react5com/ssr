import pkg from "./package.json" assert { type: "json" };

import { babel } from "@rollup/plugin-babel";
//import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from '@rollup/plugin-alias';
import { expandRootAliases } from '../../rollup.common.mjs'

const production = !process.env.ROLLUP_WATCH;
process.env.NODE_ENV = production ? 'production' : '';
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  "@babel/runtime"
];

const rootAliases = ['models', 'schemas', 'utils', 'services', 'middleware', 'controllers'];
const aliasEntries = expandRootAliases(rootAliases, import.meta.url);
const pathsToWatch =[ 'src/**', '../shared/build/**' ];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: !production,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: !production,
      },
    ],
    external,
    plugins: [
      // typescript({
      //   exclude: ["**/*.test.ts?(x)"],
      //   sourceMap: !production, inlineSources: !production
      // }),
      resolve({
        extensions,
      }),
      commonjs(),
      babel({
        exclude: /^(.+\/)?node_modules\/.+$/,
        extensions,
        babelHelpers: "runtime",
        sourcemap: !production,
      }),
      alias({
        entries: aliasEntries,
      }),
      production && terser(),
    ],
    watch: {
      paths: pathsToWatch
    }
  }
];
