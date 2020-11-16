import PropTypes from 'prop-types';
import { useGraph } from 'hooks';

interface Props {
  children: number;
  x: number;
  y: number;
}

/**
 * Label
 */
const Label = ({ children, x, y }: Props) => {
  const context = useGraph();

  if (!context) {
    return null;
  }

  const { scale } = context;

  return (
    <text
      alignmentBaseline="hanging"
      opacity={0.9}
      transform={`scale(${1 / scale.x},${1 / scale.y})`}
      x={(x + 0.05) * scale.x}
      y={(y + 0.1) * scale.y}
    >
      {children}
    </text>
  );
};

Label.propTypes = {
  children: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Label;
