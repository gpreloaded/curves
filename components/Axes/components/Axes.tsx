import Axis from './Axis';
import { useGraph } from 'hooks';

/**
 * Axes
 */
const Axes = () => {
  const context = useGraph();

  if (!context) {
    return null;
  }

  const { x, y } = context;

  const drawX = Math.sign(y.min) !== Math.sign(y.max),
    drawY = Math.sign(x.min) !== Math.sign(x.max);

  return (
    <>
      {drawX && <Axis x1={x.min} x2={x.max} y1={0} y2={0} />}
      {drawY && <Axis x1={0} x2={0} y1={y.min} y2={y.max} />}
    </>
  );
};

export default Axes;
