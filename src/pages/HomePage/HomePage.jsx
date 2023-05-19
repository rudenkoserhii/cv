import { Img } from './HomePage.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';

const HomePage = () => {
  const { selected } = useContext(ThrowContext);

  return (
    selected && (
      <picture key={selected.name}>
        <source srcSet={selected.urlWebp} type="image/webp" />
        <source srcSet={selected.urlPng} type="image/png" />
        <Img src={selected.urlPng} alt="Man" width="800px" className="first" />
      </picture>
    )
  );
};

export default HomePage;
