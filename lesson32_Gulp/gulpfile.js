import gulp from 'gulp';

import { path } from './gulp/config.js';

import { img } from './gulp/tasks/img.js';
import { clean } from './gulp/tasks/clean.js';
import { html } from './gulp/tasks/html.js';
import { css } from './gulp/tasks/css.js';
import { js } from './gulp/tasks/js.js';
import { refresh } from './gulp/tasks/refresh.js';

const watcher = () => {
  gulp.watch(path.src.img, img);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.js, js);
}

const copyingTasks = gulp.parallel(img, html, css, js);
const livingTasks = gulp.parallel(watcher, refresh);

gulp.task('default', gulp.series(clean, copyingTasks, livingTasks));