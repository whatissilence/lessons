import gulp from 'gulp';
import { path } from '../config.js';

export const img = () => {
  return gulp.src(path.src.img, {removeBOM: false}) // removeBOM опція потрібна щоб правильно копіювати зображення
    .pipe(gulp.dest(path.build.img));
}

