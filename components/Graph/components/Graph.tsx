import { createContext, useMemo, useState } from 'react';
import { GraphContext } from 'types';
import PropTypes from 'prop-types';
import usePan from '../hooks/usePan';
import useZoom from '../hooks/useZoom';

interface Props {
  children?: React.ReactNode;
  height: number;
  width: number;
}

export const Context = createContext<null | GraphContext>(null);

const defaultRange = {
  max: 5,
  min: -5,
};

/**
 * Graph
 */
const Graph = ({ children, height, width }: Props) => {
  const [range, setRange] = useState({ x: defaultRange, y: defaultRange });
  const utilsPan = usePan(setRange, width, height);
  const utilsZoom = useZoom(setRange);

  const scale = useMemo(() => {
    return {
      x: width / (range.x.max - range.x.min),
      y: height / (range.y.max - range.y.min),
    };
  }, [height, range.x.max, range.x.min, range.y.max, range.y.min, width]);

  const translate = useMemo(() => {
    return {
      x: -range.x.min,
      y: -range.y.min,
    };
  }, [height, range.x.min, range.y.min, width]);

  return (
    <Context.Provider value={{ scale, x: range.x, y: range.y }}>
      <svg
        {...utilsPan}
        {...utilsZoom}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        width={width}
      >
        <g
          transform={`scale(${scale.x},${scale.y}) translate(${translate.x},${translate.y})`}
        >
          {children}
        </g>
      </svg>
    </Context.Provider>
  );
};

Graph.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Graph;
