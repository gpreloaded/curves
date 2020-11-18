import { Curve } from 'types';
import { useReducer } from 'react';

type ACTIONTYPE =
  | {
      type: 'ADD';
      curve: Curve;
    }
  | {
      type: 'CHANGE';
      curve: Curve;
      id: number;
    }
  | {
      type: 'REMOVE';
      id: number;
    };

const initialState: Curve[] = [];

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'ADD':
      return [action.curve, ...state];

    case 'CHANGE':
      return state.map((e, i) => (i !== action.id ? e : action.curve));

    case 'REMOVE':
      return state.filter((e, i) => i !== action.id);

    default: {
      return state;
    }
  }
}

export default function useCurves(): [
  Curve[],
  (curve: Curve) => void,
  (curve: Curve, id: number) => void,
  (id: number) => void
] {
  const [curves, dispatch] = useReducer(reducer, initialState);

  const add = (curve: Curve) => {
    dispatch({
      type: 'ADD',
      curve,
    });
  };

  const change = (curve: Curve, id: number) => {
    dispatch({
      type: 'CHANGE',
      curve,
      id,
    });
  };

  const remove = (id: number) => {
    dispatch({
      type: 'REMOVE',
      id,
    });
  };

  return [curves, add, change, remove];
}
