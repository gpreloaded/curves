import Box from '@material-ui/core/Box';
import { ChangeEvent, KeyboardEvent } from 'react';
import ColorInput from './ColorInput';
import { Curve as CurveType } from 'types';
import Divider from '@material-ui/core/Divider';
import IconAdd from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import IconDelete from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';

interface Props {
  addMode?: boolean;
  color?: string;
  eq: string;
  onAction: () => void;
  onChange: (curve: CurveType) => void;
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
const Curve = ({ addMode, color, eq, onAction, onChange }: Props) => {
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
        onKeyPress={(event: KeyboardEvent) => {
          if (addMode && event.key === 'Enter') {
            onAction();
          }
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

      <IconButton className={classes.iconButton} onClick={onAction}>
        {addMode ? <IconAdd /> : <IconDelete />}
      </IconButton>
    </Box>
  );
};

Curve.propTypes = {
  addMode: PropTypes.bool,
  color: PropTypes.string,
  eq: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Curve;
