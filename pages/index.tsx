import Axes from 'components/Axes';
import Graph from 'components/Graph';
import Grid from 'components/Grid';

/**
 * Home
 */
const Home = () => (
  <Graph height={500} width={500}>
    <Axes />
    <Grid />
  </Graph>
);

export default Home;
