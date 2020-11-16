import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = responsiveFontSizes(createMuiTheme({}));

export interface Props {
  children: React.ReactNode;
}

/**
 * ThemeProvider
 */
const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

ThemeProvider.propTypes = {
  node: PropTypes.node,
};

export default ThemeProvider;
