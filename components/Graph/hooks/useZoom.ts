import { Dispatch, SetStateAction, WheelEvent } from 'react';
import { Range } from 'types';

export default function useZoom(
  setRange: Dispatch<SetStateAction<{ x: Range; y: Range }>>
) {
  const onWheel = (event: WheelEvent<SVGSVGElement>) => {
    const sign = event.deltaY > 0 ? -1 : 1;

    setRange((range) => {
      const step = {
        x: (range.x.max - range.x.min) / 10,
        y: (range.y.max - range.y.min) / 10,
      };

      return {
        x: {
          max: range.x.max + sign * step.x,
          min: range.x.min - sign * step.x,
        },
        y: {
          max: range.y.max + sign * step.y,
          min: range.y.min - sign * step.y,
        },
      };
    });
  };

  return {
    onWheel,
  };
}
