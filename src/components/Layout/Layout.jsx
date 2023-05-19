import { AppBar } from '../AppBar/AppBar';
import { Header, Name } from './Layout.styled';
import { Main } from '../Main/Main';
import { Footer } from 'components/Footer/Footer';
import Box from '../Box/Box';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';

export const Layout = () => {
  const { selected } = useContext(ThrowContext);

  return (
    selected && (
      <Box
        width="1200px"
        display="flex"
        justifyContent="center"
        ml={'auto'}
        mr={'auto'}
        flexDirection="column"
        p={64}
      >
        <Box
          display="flex"
          mb={64}
          minHeight={600}
          style={{ position: 'relative' }}
        >
          <Name className="fullName">
            <span className="firstName">{selected.name}</span>
            <span className="secondName">{selected.job}</span>
          </Name>
          <Header>
            <AppBar />
          </Header>
          <Main />
        </Box>
        <Footer />
      </Box>
    )
  );
};
