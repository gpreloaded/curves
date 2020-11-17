import { evaluate } from 'mathjs';
import PropTypes from 'prop-types';
import { useGraph } from 'hooks';
import { useMemo } from 'react';

interface Props {
  eq: string;
}

const NB_POINTS = 200;
const POINTS_ARR = new Array(NB_POINTS).fill(0).map((e, i) => i);

/**
 * Curve
 */
const Curve = ({ eq }: Props) => {
  const context = useGraph();

  if (!context) {
    return null;
  }

  const { x, y } = context;

  const d = useMemo(() => {
    const step = (x.max - x.min) / NB_POINTS;
    const p = POINTS_ARR.map((e) => x.min + e * step);
    const [first, ...points] = p.map((e) => `${e},${-evaluate(eq, { x: e })}`);

    return `M${first} ${points.join(' L')}`;
  }, [x.max, x.min]);

  return (
    <path
      d={d}
      fill="none"
      stroke="black"
      strokeWidth={2}
      vectorEffect="non-scaling-stroke"
    />
  );
};

Curve.propTypes = {
  eq: PropTypes.string.isRequired,
};

export default Curve;
