import { Img, Cards, Card } from './HomePage.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';

const HomePage = () => {
  const { selected } = useContext(ThrowContext);

const quantity = 12;

const cards = [...Array(quantity).keys()]

function onCardClick (e) {
console.log(e.currentTarget.id)


}

  return (
    selected && (
<>
<Cards>
{cards.map(card => <Card key={card} id={card} onClick={onCardClick}></Card>)}
</Cards>
      <picture key={selected.name}>
        <source srcSet={selected.urlWebp} type="image/webp" />
        <source srcSet={selected.urlPng} type="image/png" />
        <Img src={selected.urlPng} alt="Man" width="800px" className="first" />
      </picture>
</>
    )
  );
};

export default HomePage;
