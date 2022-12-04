import { createContext, useState, useEffect } from 'react';
import { getPeoples } from "fakeAPI";



export const ThrowContext = createContext('dark');

export const Context = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const [peoples, setPeoples] = useState([]);

    useEffect(() => {

        async function getPeoplesOnLoad () {
            await getPeoples().then(setPeoples);
        }
        getPeoplesOnLoad();
    }, [])


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min}

    const selected = peoples[getRandom(0, peoples.length)];

  return (
    <ThrowContext.Provider value={{ theme, setTheme, selected }}>
        {children}
    </ThrowContext.Provider>
  );
};
