import Axis from './Axis';
import { format } from 'mathjs';
import Label from './Label';
import { Range } from 'types';
import { useGraph } from 'hooks';
import { Fragment, useMemo } from 'react';

function getFirstAndRank(n: number): [first: number, rank: number] {
  if (n > 1) {
    let i = 0;
    while (n >= 10) {
      n /= 10;
      i++;
    }

    return [Math.trunc(n), i];
  }

  let i = 0;
  while (n < 1) {
    n *= 10;
    i++;
  }

  return [Math.trunc(n), -i];
}

function calcStep(range: Range) {
  const delta = range.max - range.min;

  const maxSplit = delta / 10;
  const [first, rank] = getFirstAndRank(maxSplit);

  // if (rank < 0) {
  //   if (first > 5) {
  //     return 5 * Math.pow(10, rank);
  //   } else if (first > 2) {
  //     return 2 * Math.pow(10, rank);
  //   } else {
  //     return Math.pow(10, rank);
  //   }
  // }

  if (first === 1) {
    // x = 1
    return Math.pow(10, rank);
  } else if (first <= 2) {
    // 1 < x <= 2
    return 2 * Math.pow(10, rank);
  } else if (first <= 5) {
    // 2 < x <= 5
    return 5 * Math.pow(10, rank);
  } else {
    // x > 5
    return 10 * Math.pow(10, rank);
  }
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
    const step = calcStep(x);
    const start = x.min - (x.min % step);

    for (let i = start; i < x.max; i += step) {
      arr.push(
        <Fragment key={`x${i}`}>
          <Axis x1={i} x2={i} y1={y.min} y2={y.max} />
          <Label x={i} y={0}>
            {format(i, { precision: 5 })}
          </Label>
        </Fragment>
      );
    }

    return arr;
  }, [x.max, x.min]);

  const yGrid = useMemo<React.ReactElement[]>(() => {
    const arr: React.ReactElement[] = [];
    const step = calcStep(y);
    const start = y.min - (y.min % step);

    for (let i = start; i < y.max; i += step) {
      if (i === 0) {
        continue;
      }

      arr.push(
        <Fragment key={`y${i}`}>
          <Axis x1={x.min} x2={x.max} y1={i} y2={i} />
          <Label alternative x={0} y={i}>
            {format(-i, { precision: 5 })}
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
