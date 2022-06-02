import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../utils/theme';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />

        <Container className="pt-10" maxWidth="lg">
          {children}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
