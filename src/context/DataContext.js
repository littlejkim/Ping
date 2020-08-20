import React, {useState} from 'react';

const StoreContext = React.createContext(null);

const StoreProvider = ({children}) => {
  const [key, setKey] = useState(0);
  const [device, setDevice] = useState(0);
  const [price, setPrice] = useState('hi');
  const [distance, setDistance] = useState(0);
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
