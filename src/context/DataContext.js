import React, {useState} from 'react';

const StoreContext = React.createContext(null);

const StoreProvider = ({children}) => {
  const [key, setKey] = useState('key');
  const [device, setDevice] = useState('hi');

  const [price, setPrice] = useState('price');
  const [distance, setDistance] = useState('distance');
  const [selected, setSelected] = useState([]);
  const store = {
    key,
    setKey,
    device,
    setDevice,
    price,
    setPrice,
    distance,
    setDistance,
    selected,
    setSelected,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export {StoreProvider, StoreContext};
