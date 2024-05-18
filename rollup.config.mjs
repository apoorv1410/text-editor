import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const packageJson = require("./package.json");
const dependencies = ({ dependencies }) => Object.keys(dependencies || {});
const pkgdependencies = dependencies(pkg);

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        dir: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extensions: [ '.css' ],
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ],
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      copy({
        targets: [
          { src: 'public/icons', dest: 'dist/public' },
          { src: 'src/components/TextEditor.css', dest: '/' }
        ]
      })
    ],
    external: ["react", "react-dom",id => pkgdependencies.includes(id)]
  }
];