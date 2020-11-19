import Box from '@material-ui/core/Box';
import Curve from './Curve';
import { Curve as CurveType } from 'types';
import PropTypes from 'prop-types';
import { useState } from 'react';

interface Props {
  curves: CurveType[];
  onAdd: (curve: CurveType) => void;
  onChange: (curve: CurveType, i: number) => void;
  onRemove: (i: number) => void;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function getDefaultCurve() {
  return {
    color: getRandomColor(),
    eq: '',
  };
}

/**
 * PanelCurves
 */
const PanelCurves = ({ curves, onAdd, onChange, onRemove }: Props) => {
  const [nextCurve, setNextCurve] = useState<CurveType>(getDefaultCurve());

  return (
    <Box padding={2} width={350}>
      <Curve
        {...nextCurve}
        addMode
        onAction={() => {
          if (nextCurve.eq.length) {
            onAdd(nextCurve);
            setNextCurve(getDefaultCurve());
          }
        }}
        onChange={setNextCurve}
      />

      {curves.map((curve, i) => (
        <Curve
          {...curve}
          key={i}
          onAction={() => {
            onRemove(i);
          }}
          onChange={(c: CurveType) => {
            onChange(c, i);
          }}
        />
      ))}
    </Box>
  );
};

PanelCurves.propTypes = {
  curves: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PanelCurves;
