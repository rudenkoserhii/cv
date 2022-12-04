import { nanoid } from "nanoid";
import photo_01 from './img/hero/photo_01.jpg';
import photo_02 from './img/hero/photo_02.jpg';


const db = {
  peoples: [
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      url: photo_01,
      date_created: '2022-08-28T14:00:00.000Z',
    },
    {
      id: nanoid(),
      name: 'Serhii Rudenko',
      url: photo_02,
      date_created: '2022-08-28T15:00:00.000Z',
    },
  ],
};
export const getPeoples = () => {
  return Promise.resolve(db.peoples);
};
