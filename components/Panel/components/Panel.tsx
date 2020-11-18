import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Curve from './Curve';
import { Curve as CurveType } from 'types';
import PropTypes from 'prop-types';

interface Props {
  curves: CurveType[];
  onAdd: (curve: CurveType) => void;
  onChange: (curve: CurveType, i: number) => void;
  onRemove: (i: number) => void;
}

/**
 * Panel
 */
const Panel = ({ curves, onAdd, onChange, onRemove }: Props) => (
  <Box padding={2} width={350}>
    <Button
      color="primary"
      fullWidth
      onClick={() => {
        onAdd({ eq: 'x' });
      }}
    >
      Add
    </Button>

    {curves.map((curve, i) => (
      <Curve
        {...curve}
        key={i}
        onChange={(c: CurveType) => {
          onChange(c, i);
        }}
        onRemove={() => {
          onRemove(i);
        }}
      />
    ))}
  </Box>
);

Panel.propTypes = {
  curves: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Panel;
