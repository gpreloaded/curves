import Box from '@material-ui/core/Box';
import { ChangeEvent } from 'react';
import ColorInput from './ColorInput';
import { Curve as CurveType } from 'types';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import IconDelete from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';

interface Props {
  color?: string;
  eq: string;
  onChange: (curve: CurveType) => void;
  onRemove: () => void;
}

const useStyles = makeStyles({
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

/**
 * Curve
 */
const Curve = ({ color, eq, onChange, onRemove }: Props) => {
  const classes = useStyles();

  return (
    <Box alignItems="center" display="flex" width="100%">
      <InputBase
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange({
            color,
            eq: event.currentTarget.value,
          });
        }}
        placeholder="Enter a function"
        value={eq}
      />

      <ColorInput
        className={classes.iconButton}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange({
            color: event.currentTarget.value,
            eq,
          });
        }}
        value={color}
      />

      <Divider className={classes.divider} orientation="vertical" />

      <IconButton className={classes.iconButton} onClick={onRemove}>
        <IconDelete />
      </IconButton>
    </Box>
  );
};

Curve.propTypes = {
  color: PropTypes.string,
  eq: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Curve;
