import Box from '@material-ui/core/Box';
import { Dispatch, SetStateAction } from 'react';
import { Grid } from 'types';
import PropTypes from 'prop-types';
import Range from './Range';

interface Props {
  grid: Grid;
  onGridChange: Dispatch<SetStateAction<Grid>>;
}

/**
 * PanelGrid
 */
const PanelGrid = ({ grid, onGridChange }: Props) => {
  return (
    <Box padding={2} width={350}>
      <Range
        label="x"
        onChange={(range) => {
          onGridChange({
            ...grid,
            x: range,
          });
        }}
        value={grid.x}
      />
      <Range
        label="y"
        onChange={(range) => {
          onGridChange({
            ...grid,
            y: range,
          });
        }}
        value={grid.y}
      />
    </Box>
  );
};

PanelGrid.propTypes = {
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
  onGridChange: PropTypes.func.isRequired,
};

export default PanelGrid;
