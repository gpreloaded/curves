import PropTypes from 'prop-types';
import { useGraph } from 'hooks';

interface Props {
  alternative?: boolean;
  children: string;
  x: number;
  y: number;
}

/**
 * Label
 */
const Label = ({ alternative, children, x, y }: Props) => {
  const context = useGraph();

  if (!context) {
    return null;
  }

  const { scale } = context;

  return (
    <text
      alignmentBaseline="hanging"
      opacity={0.9}
      textAnchor={alternative ? 'end' : undefined}
      transform={`scale(${1 / scale.x},${1 / scale.y}) translate(${
        alternative ? -5 : 5
      },5)`}
      x={x * scale.x}
      y={y * scale.y}
    >
      {children}
    </text>
  );
};

Label.propTypes = {
  alternative: PropTypes.bool,
  children: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Label;
