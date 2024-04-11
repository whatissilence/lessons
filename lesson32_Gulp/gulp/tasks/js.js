import gulp from 'gulp';
import { path } from '../config.js';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';

export const js = () => {
  return gulp.src(path.src.js, { sourcemaps: true })
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'main.min.js'
      }
    }))
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
}

