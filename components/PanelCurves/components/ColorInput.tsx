import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useRef } from 'react';

interface Props {
  className?: string;
  onChange: (e: any) => void;
  value: string;
}

const useStyles = makeStyles({
  box: {
    opacity: 0.9,
  },
  button: {
    position: 'relative',
  },
  input: {
    height: 0,
    position: 'absolute',
    visibility: 'hidden',
    width: 0,
  },
});

/**
 * Color
 */
const Color = ({ className, onChange, value }: Props) => {
  const classes = useStyles();
  const input = useRef<HTMLInputElement>(null!);

  const handleClick = () => {
    if (input.current) {
      input.current.click();
    }
  };

  return (
    <IconButton
      className={clsx(classes.button, className)}
      onClick={handleClick}
    >
      <Box
        className={classes.box}
        bgcolor={value}
        borderRadius={12}
        height={24}
        width={24}
      />
      <input
        className={classes.input}
        onChange={onChange}
        ref={input}
        type="color"
        value={value}
      />
    </IconButton>
  );
};

Color.defaultProps = {
  value: '#000000',
};

Color.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Color;
