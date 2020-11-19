import { createContext, Dispatch, SetStateAction, useMemo } from 'react';
import { GraphContext, Grid } from 'types';
import PropTypes from 'prop-types';
import usePan from '../hooks/usePan';
import useZoom from '../hooks/useZoom';

interface Props {
  children?: React.ReactNode;
  grid: Grid;
  height: number;
  onGridChange: Dispatch<SetStateAction<Grid>>;
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
const Graph = ({ children, grid, height, onGridChange, width }: Props) => {
  const utilsPan = usePan(onGridChange, width, height);
  const utilsZoom = useZoom(onGridChange);

  const scale = useMemo(() => {
    return {
      x: width / (grid.x.max - grid.x.min),
      y: height / (grid.y.max - grid.y.min),
    };
  }, [height, grid.x.max, grid.x.min, grid.y.max, grid.y.min, width]);

  const translate = useMemo(() => {
    return {
      x: -grid.x.min,
      y: -grid.y.min,
    };
  }, [height, grid.x.min, grid.y.min, width]);

  return (
    <Context.Provider value={{ scale, x: grid.x, y: grid.y }}>
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
  grid: PropTypes.shape({
    x: PropTypes.shape({
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }).isRequired,
    y: PropTypes.shape({
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  height: PropTypes.number.isRequired,
  onGridChange: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default Graph;
