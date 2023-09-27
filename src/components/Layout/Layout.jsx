import { AppBar } from '../AppBar/AppBar';
import { Header, Name } from './Layout.styled';
import { Main } from '../Main/Main';
import { Footer } from 'components/Footer/Footer';
import Box from '../Box/Box';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useTranslation } from 'react-i18next';
import { Star } from 'components/Star/Star';

export const Layout = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

const quantity = 7;

const stars = [...Array(quantity).keys()].map(el => el += 1)


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
{stars.map(star => <Star key={star} size={`${star}`}></Star>)}
        
        <Box
          display="flex"
          mb={64}
          minHeight={600}
          style={{ position: 'relative' }}
        >
          <Name className="fullName">
            <span className="firstName">{t(selected.name)}</span>
            <span className="secondName">{t(selected.job)}</span>
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
