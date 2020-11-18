import Axes from 'components/Axes';
import Curve from 'components/Curve';
import Graph from 'components/Graph';
import Grid from 'components/Grid';
import Panel from 'components/Panel';
import { useCurves } from 'hooks';

/**
 * Home
 */
const Home = () => {
  const [curves, add, change, remove] = useCurves();

  return (
    <>
      <Graph height={500} width={500}>
        <Axes />
        <Grid />
        {curves.map((curve, i) => (
          <Curve {...curve} key={i} />
        ))}
      </Graph>

      <Panel curves={curves} onAdd={add} onChange={change} onRemove={remove} />
    </>
  );
};

export default Home;
