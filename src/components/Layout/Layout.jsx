import { AppBar } from '../AppBar/AppBar';
import { Header } from './Layout.styled';
import { Main } from '../Main/Main';
import { Footer } from 'components/Footer/Footer';
import Box from '../Box/Box'

export const Layout = () => {

  return (
    <>
        <Box display="flex">
          <Header>
            <AppBar />
          </Header>
          <Main />
        </Box>
        <Footer/>
    </>
  );
};