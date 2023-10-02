import { AppBar } from '../AppBar/AppBar';
import {
  Header,
  Name,
  Wrap,
  WrapWhole,
  ButtonBurger,
  ButtonClose,
  IconBurger,
  IconClose,
} from './Layout.styled';
import { Main } from '../Main/Main';
import { Footer } from 'components/Footer/Footer';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useTranslation } from 'react-i18next';
import { Star } from 'components/Star/Star';

export const Layout = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  const quantity = 7;

  const stars = [...Array(quantity).keys()].map(el => (el += 1));

  function toggleBurgerMenu(e) {

console.log(e.currentTarget.parentElement.nextSibling)
    e.currentTarget.style.visibility = 'hidden';
    if (e.currentTarget.nextSibling) {
      e.currentTarget.nextSibling.style.visibility = 'visible';
      e.currentTarget.parentElement.nextSibling.style.display = 'flex';

    }
    if (e.currentTarget.previousSibling) {
      e.currentTarget.previousSibling.style.visibility = 'visible';
    }
  }

  return (
    selected && (
      <WrapWhole>
        <div>
          {stars.map(star => (
            <Star key={star} size={`${star}`}></Star>
          ))}
        </div>
        <Wrap>
          <div style={{ position: 'relative', height: '40px', width: '40px', margin: '32px auto 32px auto' }}>
            <ButtonBurger type="button" onClick={toggleBurgerMenu}>
              <IconBurger />
            </ButtonBurger>
            <ButtonClose type="button" onClick={toggleBurgerMenu}>
              <IconClose />
            </ButtonClose>
          </div>
          <Header>
            <AppBar />
          </Header>
          <div>
            <Name className="fullName">
              <span className="firstName">{t(selected.name)}</span>
              <span className="secondName">{t(selected.job)}</span>
            </Name>
            <Main />
          </div>
        </Wrap>
        <Footer />
      </WrapWhole>
    )
  );
};
