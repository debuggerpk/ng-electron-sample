import * as jetpack from 'fs-jetpack';
import * as gulp from 'gulp';
import * as loadGulpPlugins from 'gulp-load-plugins';
import * as rollup from 'rollup-stream';
import * as buffer from 'vinyl-buffer';
import * as source from 'vinyl-source-stream';
import { PATHS } from './config';

const typescript = require('rollup-plugin-typescript2');

const $ = loadGulpPlugins();

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

const rollupOptions = {
  external: generateExModules(),
  plugins: [typescript({ tsconfig: PATHS.electron.src.tsConfig })],
  format: 'cjs',
  treeshake: true,
};

const rollupJS = (inputFile: string, options, cache) => {
  options = { cache, ...options };
  return (
    rollup({ input: `${PATHS.electron.src.folder}/${inputFile}`, ...options })
      .on('bundle', () => {
        cache = cache;
      })
      // rollup({ input: `${PATHS.src.folder}/${PATHS.src.scripts.source}/${inputFile}`, ...options })
      // point to the entry file.
      .pipe(source(inputFile, `${PATHS.electron.src.folder}`))
      // we need to buffer the output, since many gulp plugins don't support streams.
      .pipe(buffer())
      // size before
      .pipe($.size({ showFiles: true, showTotal: false }))
      // initialize sourcemaps
      // .pipe($.sourcemaps.init({ loadMaps: true }))
      // some transformations like uglify, rename, etc.
      .pipe(
        $.rename(path => {
          path.extname = '.js';
        }),
      )
      // size after
      .pipe($.size({ showFiles: true, showTotal: false }))
      // write source maps
      // .pipe($.sourcemaps.write('.'))
      // write to destination
      .pipe(gulp.dest(PATHS.electron.dest))
  );
};

const electronCache = null;
const preloadCache = null;

export const electronMainBundle = () => {
  return rollupJS(PATHS.electron.src.entryPoints.index, rollupOptions, electronCache);
};

export const electronPreloadBundle = () => {
  return rollupJS(PATHS.electron.src.entryPoints.preload, rollupOptions, preloadCache);
};

// export const backgroundScriptBundle = () => {
//   return rollupJS(PATHS.src.scripts.background, rollupOptions);
// };

// export const appScriptBundle = () => {
//   return rollupJS(PATHS.src.scripts.app, rollupOptions);
// };

// export const preloadScriptBundle = () => {
//   return rollupJS(PATHS.src.scripts.preload, rollupOptions);
// };

// export const splashScriptBundle = () => {
//   return rollupJS(PATHS.src.scripts.splash, rollupOptions);
// };

// export const updateScreenScriptBundle = () => {
//   return rollupJS(PATHS.src.scripts['update-screen'], rollupOptions);
// };
