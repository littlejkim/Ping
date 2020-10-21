import React, {useState} from 'react';

const StoreContext = React.createContext(null);

const StoreProvider = ({children}) => {
  const [key, setKey] = useState('');
  const [device, setDevice] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [menu, setMenu] = useState([]);
  const store = {
    key,
    setKey,
    device,
    setDevice,
    price,
    setPrice,
    distance,
    setDistance,
    menu,
    setMenu,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export {StoreProvider, StoreContext};
