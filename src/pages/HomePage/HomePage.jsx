import { Img } from './HomePage.styled'; // , Cards, Card
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
// import { useState, useEffect } from 'react';

const HomePage = () => {
  const { selected } = useContext(ThrowContext);

  // const [cards, setCards] = useState(
  //   JSON.parse(localStorage.getItem('cards')) || Array(12).fill(0.8)
  // );

  // useEffect(() => {
  //   localStorage.setItem('cards', JSON.stringify(cards));
  // }, [cards]);

  // function onCardClick(e) {
  //   const newArray = cards.toSpliced(e.currentTarget.id, 1, 0);
  //   setCards(newArray);
  //   e.currentTarget.classList.add('swirl-out-bck');
  // }

  return (
    selected && (
      <>
        {/* <Cards>
          {cards.map((card, index) => (
            <Card
              key={index}
              id={index}
              onClick={onCardClick}
              style={{ opacity: card }}
            ></Card>
          ))}
        </Cards> */}
        <picture
          key={selected.name}
          style={{
            display: 'block',
            height: 'fit-content',
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <source srcSet={selected.urlWebp} type="image/webp" />
          <source srcSet={selected.urlPng} type="image/png" />
          <Img src={selected.urlPng} alt="Man" className="first" />
        </picture>
      </>
    )
  );
};

export default HomePage;
