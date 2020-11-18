import { evaluate } from 'mathjs';
import PropTypes from 'prop-types';
import { useGraph } from 'hooks';
import { useMemo } from 'react';

interface Props {
  color?: string;
  eq: string;
}

const NB_POINTS = 200;
const POINTS_ARR = new Array(NB_POINTS).fill(0).map((e, i) => i);

/**
 * Curve
 */
const Curve = ({ color, eq }: Props) => {
  const context = useGraph();

  if (!context) {
    return null;
  }

  const { x } = context;

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
      stroke={color}
      strokeWidth={2}
      vectorEffect="non-scaling-stroke"
    />
  );
};

Curve.defaultProps = {
  color: '#000000',
};

Curve.propTypes = {
  color: PropTypes.string,
  eq: PropTypes.string.isRequired,
};

export default Curve;
