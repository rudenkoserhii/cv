import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { SelectContainerLanguage, Label, Input } from './Language.styled';

const Language = ({ place }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('chosenLanguage') || 'en'
  );

  document.querySelector('body').style.fontFamily =
    selectedLanguage === 'en'
      ? "'Maven Pro', sans-serif"
      : "'Balsamiq Sans', cursive";

  useEffect(() => {
    const saveLanguage = localStorage.getItem('chosenLanguage');
    if (saveLanguage) {
      i18next.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
    }
  }, []);

  const changeLanguage = event => {
    const language = event.target.value;
    i18next.changeLanguage(language);
    localStorage.setItem('chosenLanguage', language);
    setSelectedLanguage(language);
  };
console.log('ua' === selectedLanguage)
  return (
    <SelectContainerLanguage
      className={place}
      onChange={e => changeLanguage(e)}
    >
      <Input
        id="en"
        name="language"
        type="radio"
        value="en"
        defaultChecked={'en' === selectedLanguage}
      />
      <Label htmlFor="en">EN</Label>
      <Input
        id="ua"
        name="language"
        type="radio"
        value="ua"
        defaultChecked={'ua' === selectedLanguage}
      />
      <Label htmlFor="ua">UA</Label>
    </SelectContainerLanguage>
  );
};

export default Language;
