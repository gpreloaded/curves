import { Grid } from 'types';

import { useState } from 'react';

const defaultRange = {
  max: 5,
  min: -5,
};

export default function useGrid() {
  return useState<Grid>({
    x: defaultRange,
    y: defaultRange,
  });
}
