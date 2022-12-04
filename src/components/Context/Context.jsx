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


  return (
    <ThrowContext.Provider value={{theme, peoples, setTheme}}>
        {children}
    </ThrowContext.Provider>
  );
};
