import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js`,
    css: `${buildFolder}/css`,
    html: buildFolder,
    img: `${buildFolder}/images`
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    css: `${srcFolder}/css/*.css`,
    html: `${srcFolder}/*.html`,
    img: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif}`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    img: `${srcFolder}/images/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};