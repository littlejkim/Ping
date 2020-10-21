import React, {useState} from 'react';

const StoreContext = React.createContext(null);

const StoreProvider = ({children}) => {
  const [url, setUrl] = useState('');
  const [device, setDevice] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [selected, setSelected] = useState([]);
  const store = {
    url,
    setUrl,
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
