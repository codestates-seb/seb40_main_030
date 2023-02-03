// 공통 theme 요소

import { COLOR, SIGNATURE_COLOR } from './color';
import { SIZE, Z_INDEX } from './size';

const theme = {
  ...COLOR,
  ...SIGNATURE_COLOR,
  ...SIZE,
  ...Z_INDEX,
};

export default theme;
