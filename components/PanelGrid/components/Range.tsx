import Box from '@material-ui/core/Box';
import { ChangeEvent } from 'react';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Range as RangeType } from 'types';
import Typography from '@material-ui/core/Typography';

interface Props {
  label: string;
  onChange: (range: RangeType) => void;
  value: RangeType;
}

const useStyles = makeStyles((theme) => ({
  divider: {
    height: 28,
    margin: 4,
  },
  label: {
    flex: 1,
    marginRight: theme.spacing(2),
  },
  input: {
    textAlign: 'center',
    width: 70,
  },
}));

/**
 * Range
 */
const Range = ({ label, onChange, value }: Props) => {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      [event.currentTarget.name]: +event.currentTarget.value,
    });
  };

  return (
    <Box alignItems="center" display="flex">
      <Typography
        className={classes.label}
        color="textSecondary"
        variant="body2"
      >
        {label}
      </Typography>

      <InputBase
        classes={{ input: classes.input }}
        name="min"
        onChange={handleChange}
        type="number"
        value={value.min}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        classes={{ input: classes.input }}
        name="max"
        onChange={handleChange}
        type="number"
        value={value.max}
      />
    </Box>
  );
};

Range.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
};

export default Range;
