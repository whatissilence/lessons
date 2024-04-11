import browserSync from 'browser-sync';
import { path } from '../config.js';

export const refresh = () => {
  browserSync.init({
    server: {
      baseDir: path.build.html
    },
    notify: true,
    port: 3000
  });

}