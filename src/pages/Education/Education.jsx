import {
  Text,
  Paragraph,
  ListItem,
  ListStyled,
  Img,
  ListItemCertificate,
  LinkStyled,
} from './Education.styled';
import { Title } from '../About/About.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Education = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  return (
    <>
      <Title className="first">{t('Education')}</Title>
      <ListStyled className="second">
        {selected.education.map(
          ({ name, dateStart, dateEnd, speciality, country, city, logo }) => (
            <ListItem key={nanoid()} logo={logo}>
              <div className="third">
                <Text>
                  <b>{t(name)}</b>
                </Text>
                <Text>{t(speciality)}</Text>
                <Text>
                  <Paragraph>{t(dateStart)} - </Paragraph>
                  <Paragraph>{t(dateEnd)}</Paragraph>
                  <br />
                  <Paragraph>{t(city)}, </Paragraph>
                  <Paragraph>{t(country)}</Paragraph>
                </Text>
              </div>
            </ListItem>
          )
        )}
      </ListStyled>
      <Title>{t('Certificate')}</Title>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {selected.certificates.map(({ name, preview, link }) => (
          <SwiperSlide key={nanoid()} style={{}}>
            <LinkStyled href={link} target="_blank">
              <ListItemCertificate>
                <div className="third">
                  <Text
                    style={{
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                      width: '100%',
                    }}
                    className="certName"
                  >
                    {t(name)}
                  </Text>
                  <Img
                    src={preview}
                    alt={'Certeficate preview'}
                    className="certImg"
                  />
                </div>
              </ListItemCertificate>
            </LinkStyled>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Education;
