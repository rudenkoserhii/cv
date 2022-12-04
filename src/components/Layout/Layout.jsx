import { AppBar } from '../AppBar/AppBar';
import { Header } from './Layout.styled';
import { Main } from '../Main/Main';
import { Footer } from 'components/Footer/Footer';

export const Layout = () => {

  return (
    <>
        <Header>
          <AppBar />
        </Header>
        <Main />
        <Footer/>
    </>
  );
};