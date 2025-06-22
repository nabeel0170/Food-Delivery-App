/* eslint-disable @typescript-eslint/no-require-imports */

import { BOTTOM_SHEETS } from '@/constants';

//this is a workaround for the issue with the circular dependency
export const bottomSheetRegistry = {
  [BOTTOM_SHEETS.EXAMPLE]: () => null,
};
