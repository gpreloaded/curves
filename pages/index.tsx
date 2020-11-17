import Axes from 'components/Axes';
import Curve from 'components/Curve';
import Graph from 'components/Graph';
import Grid from 'components/Grid';

/**
 * Home
 */
const Home = () => (
  <Graph height={500} width={500}>
    <Axes />
    <Grid />
    <Curve eq="sin(x)" />
  </Graph>
);

export default Home;
