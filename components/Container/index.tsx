import MuiContainer, { ContainerProps } from '@material-ui/core/Container';

/**
 * Container
 */
const Container = (props: ContainerProps) => (
  <MuiContainer {...props} maxWidth="md" />
);

export default Container;
