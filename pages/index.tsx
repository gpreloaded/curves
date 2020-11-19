import Axes from 'components/Axes';
import Curve from 'components/Curve';
import Graph from 'components/Graph';
import Grid from 'components/Grid';
import PanelCurves from 'components/PanelCurves';
import PanelGrid from 'components/PanelGrid';
import { useCurves } from 'hooks';
import { useGrid } from 'hooks';

/**
 * Home
 */
const Home = () => {
  const [curves, add, change, remove] = useCurves();
  const [grid, setGrid] = useGrid();

  return (
    <>
      <Graph grid={grid} height={500} onGridChange={setGrid} width={500}>
        <Axes />
        <Grid />
        {curves.map((curve, i) => (
          <Curve {...curve} key={i} />
        ))}
      </Graph>

      <PanelGrid grid={grid} onGridChange={setGrid} />

      <PanelCurves
        curves={curves}
        onAdd={add}
        onChange={change}
        onRemove={remove}
      />
    </>
  );
};

export default Home;
