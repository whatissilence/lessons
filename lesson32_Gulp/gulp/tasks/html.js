import gulp from 'gulp';
import { path } from '../config.js';
import fileInclude from 'gulp-file-include';
import versioNumber from 'gulp-version-number';
import browserSync from "browser-sync";

export const html = () => {
  return gulp.src(path.src.html)
    .pipe(fileInclude())
    .pipe(versioNumber({
      value: '%DT%',
      append: {
        key: '_v',
        cover: 0,
        to: [
          'css',
          'js',
        ]
      },
      output: {
        file: 'gulp/version.json'
      }
    }))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
}

