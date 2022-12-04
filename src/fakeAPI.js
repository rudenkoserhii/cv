import { nanoid } from "nanoid";
import photo_01_jpg from './img/hero/photo_01.jpg';
import photo_02_jpg from './img/hero/photo_02.jpg';
import photo_03_jpg from './img/hero/photo_03.jpg';
import photo_04_jpg from './img/hero/photo_04.jpg';
import photo_05_jpg from './img/hero/photo_05.jpg';
import photo_01_webp from './img/hero/photo_01.webp';
import photo_02_webp from './img/hero/photo_02.webp';
import photo_03_webp from './img/hero/photo_03.webp';
import photo_04_webp from './img/hero/photo_04.webp';
import photo_05_webp from './img/hero/photo_05.webp';

const db = {
  peoples: [
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_01_jpg,
      urlWebp: photo_01_webp,
      date_created: '2022-08-28T14:00:00.000Z',
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_02_jpg,
      urlWebp: photo_02_webp,
      date_created: '2022-08-28T15:00:00.000Z',
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_03_jpg,
      urlWebp: photo_03_webp,
      date_created: '2022-08-28T16:00:00.000Z',
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_04_jpg,
      urlWebp: photo_04_webp,
      date_created: '2022-08-28T17:00:00.000Z',
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      job: 'Developer',
      urlJpg: photo_05_jpg,
      urlWebp: photo_05_webp,
      date_created: '2022-08-28T18:00:00.000Z',
    },
  ],
};
export const getPeoples = () => {
  return Promise.resolve(db.peoples);
};
