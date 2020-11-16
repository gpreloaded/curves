import { Context } from 'components/Graph';
import { useContext } from 'react';

export default function useGraph() {
  return useContext(Context);
}
