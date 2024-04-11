import gulp from 'gulp';
import { path } from '../config.js';

export const css = () => {
  return gulp.src(path.src.css)
    .pipe(gulp.dest(path.build.css));
}

