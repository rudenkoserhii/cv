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
import { useContext, useState } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useTranslation } from 'react-i18next';
import { Star } from 'components/Star/Star';

export const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  const quantity = 7;

  const stars = [...Array(quantity).keys()].map(el => (el += 1));

  function handleClick() {
    setIsExpanded(!isExpanded);
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
          <div
            style={{
              position: 'relative',
              height: 'auto',
              width: 'auto',
              margin: '32px auto 32px auto',
            }}
          >
            <ButtonBurger
              className={`${isExpanded}Expanded`}
              type="button"
              onClick={handleClick}
            >
              <IconBurger />
            </ButtonBurger>
            <ButtonClose
              className={`${!isExpanded}Expanded`}
              type="button"
              onClick={handleClick}
            >
              <IconClose />
            </ButtonClose>
          </div>
          <Header
            className={`${isExpanded}Expanded slide-in-blurred-top slide-out-blurred-top`}
            onClick={handleClick}
          >
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
