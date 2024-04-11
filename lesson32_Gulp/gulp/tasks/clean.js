import {deleteAsync} from 'del';
import { path } from '../config.js';

export const clean = () => {
  return deleteAsync([path.clean]);
}

