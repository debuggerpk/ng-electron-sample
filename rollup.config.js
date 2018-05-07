import typescript from 'rollup-plugin-typescript2';
import * as jetpack from 'fs-jetpack';

const nodeBuiltInModules = [
  'assert',
  'buffer',
  'child_process',
  'cluster',
  'console',
  'constants',
  'crypto',
  'dgram',
  'dns',
  'domain',
  'events',
  'fs',
  'http',
  'https',
  'module',
  'net',
  'os',
  'path',
  'process',
  'punycode',
  'querystring',
  'readline',
  'repl',
  'stream',
  'string_decoder',
  'timers',
  'tls',
  'tty',
  'url',
  'util',
  'v8',
  'vm',
  'zlib',
];

const electronBuiltInModules = ['electron'];
const appManifest = jetpack.read('./package.json', 'json');

const generateExModules = () => {
  return [
    ...nodeBuiltInModules,
    ...electronBuiltInModules,
    ...Object.keys(appManifest.dependencies),
    ...Object.keys(appManifest.devDependencies),
  ];
};

export default {
  input: './desktop/index.ts',
  external: generateExModules(),
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: true,
      // typescript: require('typescript'),
      tsconfig: './tsconfig.desktop.json',
    }),
  ],
};

// 0343 872 4142 - bilal
