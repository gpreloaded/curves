import Axis from './Axis';
import Label from './Label';
import { Range } from 'types';
import { useGraph } from 'hooks';
import { Fragment, useMemo } from 'react';

const STEP = 1;

function calcStep(range: Range) {
  const delta = range.max - range.min;

  const maxSplit = Math.ceil(delta / 10);

  // le plus proche puissance de :
  // 10x10^x
  // 5x10^x
  // 2x10^x
  const separtors = [10, 5, 2];
  const selectedSeparator = separtors
    .map((e) => [e, Math.floor(maxSplit / e)])
    .sort((a, b) => b[1] - a[1]);

  console.log(delta, maxSplit, selectedSeparator);

  return selectedSeparator[0][0] * Math.pow(10, selectedSeparator[0][1] - 1);
}

/**
 * Grid
 */
const Grid = () => {
  const context = useGraph();

  if (!context) {
    return null;
  }

  const { x, y } = context;

  const xGrid = useMemo<React.ReactElement[]>(() => {
    const arr: React.ReactElement[] = [];
    const step = STEP;
    const start = Math.floor(x.min + step);

    for (let i = start; i < x.max; i += step) {
      arr.push(
        <Fragment key={`x${i}`}>
          <Axis x1={i} x2={i} y1={y.min} y2={y.max} />
          <Label x={i} y={0}>
            {i}
          </Label>
        </Fragment>
      );
    }

    return arr;
  }, [x.max, x.min]);

  const yGrid = useMemo<React.ReactElement[]>(() => {
    const arr: React.ReactElement[] = [];
    const step = STEP;
    const start = Math.floor(y.min + step);

    for (let i = start; i < y.max; i += step) {
      if (i === 0) {
        continue;
      }

      arr.push(
        <Fragment key={`y${i}`}>
          <Axis x1={x.min} x2={x.max} y1={i} y2={i} />
          <Label x={0} y={i}>
            {-i}
          </Label>
        </Fragment>
      );
    }

    return arr;
  }, [y.max, y.min]);

  return (
    <>
      {xGrid}
      {yGrid}
    </>
  );
};

export default Grid;
