import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { Grid } from 'types';

export default function usePan(
  setRange: Dispatch<SetStateAction<Grid>>,
  width: number,
  height: number
) {
  const [active, setActive] = useState(false);

  const onMouseDown = () => {
    setActive(true);
  };

  const onMouseLeave = () => {
    setActive(false);
  };

  const onMouseMove = (event: MouseEvent<SVGSVGElement>) => {
    if (!active) {
      return;
    }

    const deltaX = event.movementX / width,
      deltaY = event.movementY / height;

    setRange((range) => {
      const offsetX = Math.abs(range.x.max - range.x.min) * deltaX,
        offsetY = Math.abs(range.y.max - range.y.min) * deltaY;

      return {
        x: {
          max: range.x.max - offsetX,
          min: range.x.min - offsetX,
        },
        y: {
          max: range.y.max - offsetY,
          min: range.y.min - offsetY,
        },
      };
    });
  };

  const onMouseUp = () => {
    setActive(false);
  };

  return {
    onMouseDown,
    onMouseLeave,
    onMouseMove,
    onMouseUp,
  };
}
